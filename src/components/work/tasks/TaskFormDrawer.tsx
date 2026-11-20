import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  X,
  Save,
  CheckSquare,
  Plus,
  Trash2,
  User,
  FolderKanban,
  PanelRightClose,
  PanelRight,
  PanelRightOpen,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { Task, TaskPriority, TaskStatus, TaskSubtask, Project } from '../../../types/task';
import { Employee } from '../../../types/employee';
import { employeeService } from '../../../services/employeeService';
import { projectService, taskService } from '../../../services/taskService';
import { generateId } from '../../../utils/idGenerator';
import { useAuth } from '../../../context/AuthContext';
import { ModuleTabSwitcher, ModuleTabSwitcherProps } from '../../common/ModuleTabSwitcher';

interface TaskFormDrawerProps {
  mode: 'create' | 'edit';
  task?: Task | null;
  allTasks?: Task[];
  defaultStatus?: TaskStatus;
  defaultDate?: string;
  moduleTabSwitcher?: ModuleTabSwitcherProps;
  onClose: () => void;
  onSave: (task: Task) => void;
}

type DrawerWidthMode = 'narrow' | 'normal' | 'wide' | 'fullscreen';

export const TaskFormDrawer: React.FC<TaskFormDrawerProps> = ({
  mode,
  task,
  allTasks = [],
  defaultStatus = 'todo',
  defaultDate,
  moduleTabSwitcher,
  onClose,
  onSave,
}) => {
  const { currentUser } = useAuth();
  const [widthMode, setWidthMode] = useState<DrawerWidthMode>('wide');
  const [prevWidthMode, setPrevWidthMode] = useState<DrawerWidthMode>('wide');

  // Master Data
  const [employees, setEmployees] = useState<Employee[]>(() =>
    employeeService.getInitialEmployees()
  );
  const [projects, setProjects] = useState<Project[]>(() =>
    projectService.getInitialProjects()
  );

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      employeeService.fetchFromSheet().catch(() => employeeService.getInitialEmployees()),
      projectService.fetchFromSheet().catch(() => projectService.getInitialProjects()),
    ]).then(([emps, projs]) => {
      if (isMounted) {
        if (emps?.length) setEmployees(emps);
        if (Array.isArray(projs)) setProjects(projs);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const departmentsList = useMemo(() => {
    return Array.from(new Set(employees.map((e) => e.department).filter(Boolean)));
  }, [employees]);

  // Aggregate project options from master data + previous projects entered in allTasks
  const projectOptions = useMemo(() => {
    const list: Array<{ id: string; name: string; code?: string }> = [];
    const seenNames = new Set<string>();

    // 1. Master projects
    projects.forEach((p) => {
      const name = p.name?.trim();
      if (name && !seenNames.has(name.toLowerCase())) {
        seenNames.add(name.toLowerCase());
        list.push({ id: p.id, name, code: p.code });
      }
    });

    // 2. Previously entered projects in allTasks
    allTasks.forEach((t) => {
      const name = t.projectName?.trim();
      if (name && !seenNames.has(name.toLowerCase())) {
        seenNames.add(name.toLowerCase());
        list.push({
          id: t.projectId || generateId('proj', name),
          name,
          code: t.projectCode,
        });
      }
    });

    return list;
  }, [projects, allTasks]);

  // Form State
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [isCustomProject, setIsCustomProject] = useState(false);
  const [customProjectName, setCustomProjectName] = useState('');
  const [department, setDepartment] = useState('');
  const [assignerId, setAssignerId] = useState('');
  const [assigneeId, setAssigneeId] = useState('');
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [priority, setPriority] = useState<TaskPriority>('medium');
  const [status, setStatus] = useState<TaskStatus>(defaultStatus);
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [progress, setProgress] = useState<number>(0);
  const [estimatedHours, setEstimatedHours] = useState<number>(8);
  const [subtasks, setSubtasks] = useState<TaskSubtask[]>([]);
  const [subtaskInput, setSubtaskInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [note, setNote] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});

  const isInitializedRef = useRef(false);
  const prevEditIdRef = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    const currentEditId = mode === 'edit' && task ? (task.id || task.code) : null;
    const justMounted = !isInitializedRef.current;
    const editTargetChanged = currentEditId !== prevEditIdRef.current;

    // Only initialize when drawer is first mounted OR when switching editing task
    if (!justMounted && !editTargetChanged) {
      return;
    }

    isInitializedRef.current = true;
    prevEditIdRef.current = currentEditId;

    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const nextWeekDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const nextWeek = `${nextWeekDate.getFullYear()}-${String(nextWeekDate.getMonth() + 1).padStart(2, '0')}-${String(nextWeekDate.getDate()).padStart(2, '0')}`;

    if (mode === 'edit' && task) {
      setCode(task.code || '');
      setTitle(task.title || '');
      setDescription(task.description || '');
      setProjectId(task.projectId || '');
      setProjectName(task.projectName || '');
      setIsCustomProject(false);
      setCustomProjectName('');
      setDepartment(task.department || '');
      setAssignerId(task.assignerId || task.assignerCode || task.assignerName || '');
      setAssigneeId(task.assigneeId || task.assigneeCode || task.assigneeName || '');
      setCollaborators(task.collaborators || []);
      setPriority(task.priority || 'medium');
      setStatus(task.status || 'todo');
      setStartDate(task.startDate || today);
      setDueDate(task.dueDate || nextWeek);
      setProgress(task.progress || 0);
      setEstimatedHours(task.estimatedHours || 8);
      setSubtasks(task.subtasks || []);
      setTags(task.tags || []);
      setNote(task.note || '');
    } else {
      const tasksToScan = allTasks.length > 0 ? allTasks : taskService.getInitialTasks();
      let maxNum = 0;
      tasksToScan.forEach((t) => {
        const match = t.code?.match(/CV-(\d+)/i);
        if (match) {
          const num = parseInt(match[1], 10);
          if (!isNaN(num) && num > maxNum) {
            maxNum = num;
          }
        }
      });
      const nextNum = Math.max(maxNum + 1, tasksToScan.length + 1);
      setCode(`CV-${String(nextNum).padStart(3, '0')}`);
      setTitle('');
      setDescription('');
      setProjectId('');
      setProjectName('');
      setIsCustomProject(false);
      setCustomProjectName('');
      // Tìm nhân sự tương ứng với tài khoản đang đăng nhập để làm Người giao việc
      const loggedInEmp = employees.find(
        (e) =>
          (currentUser?.id && e.id === currentUser.id) ||
          (currentUser?.code && e.code === currentUser.code) ||
          (currentUser?.name && e.name.toLowerCase() === currentUser.name.toLowerCase())
      );
      setDepartment(loggedInEmp?.department || departmentsList[0] || 'Phòng Kỹ thuật & CNTT');
      setAssignerId(loggedInEmp ? loggedInEmp.id : (currentUser?.id || currentUser?.name || ''));
      setAssigneeId(''); // Không điền trước, để người dùng tự chọn
      setCollaborators([]);
      setPriority('medium');
      setStatus(defaultStatus);
      setStartDate(today);
      setDueDate(defaultDate || nextWeek);
      setProgress(0);
      setEstimatedHours(0);
      setSubtasks([]);
      setTags(['Công việc']);
      setNote('');
    }
  }, [mode, task, allTasks, defaultStatus, defaultDate, employees, departmentsList, currentUser]);

  // Subtasks handler
  const handleAddSubtask = () => {
    if (!subtaskInput.trim()) return;
    setSubtasks([
      ...subtasks,
      {
        id: generateId('st'),
        title: subtaskInput.trim(),
        completed: false,
      },
    ]);
    setSubtaskInput('');
  };

  const handleRemoveSubtask = (id: string) => {
    setSubtasks(subtasks.filter((s) => s.id !== id));
  };

  const handleToggleSubtask = (id: string) => {
    const updated = subtasks.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s));
    setSubtasks(updated);
    // Auto update progress based on subtasks if any
    if (updated.length > 0) {
      const doneCount = updated.filter((s) => s.completed).length;
      setProgress(Math.round((doneCount / updated.length) * 100));
    }
  };

  // Tags handler
  const handleAddTag = () => {
    const trimmed = tagInput.trim().replace(/^#/, '');
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
    }
    setTagInput('');
  };

  const handleRemoveTag = (t: string) => {
    setTags(tags.filter((item) => item !== t));
  };

  const toggleFullscreen = () => {
    if (widthMode === 'fullscreen') {
      setWidthMode(prevWidthMode);
    } else {
      setPrevWidthMode(widthMode);
      setWidthMode('fullscreen');
    }
  };

  const getDrawerWidthStyle = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return '100vw';
    }
    switch (widthMode) {
      case 'narrow':
        return 'min(560px, 100vw)';
      case 'normal':
        return 'min(780px, 100vw)';
      case 'wide':
        return 'min(1080px, 100vw)';
      case 'fullscreen':
      default:
        return '100vw';
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!title.trim()) errs.title = 'Vui lòng nhập tên/tiêu đề công việc';
    if (!assigneeId.trim()) errs.assigneeId = 'Vui lòng chọn người thực hiện chính';
    if (!dueDate) errs.dueDate = 'Vui lòng chọn hạn chót hoàn thành';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const finalProjectName = (isCustomProject ? customProjectName.trim() : projectName.trim()) || undefined;
    const matchedProject = projectOptions.find(
      (p) =>
        (finalProjectName && p.name.toLowerCase() === finalProjectName.toLowerCase()) ||
        (projectId && p.id === projectId)
    );
    const finalProjectId = matchedProject?.id || (finalProjectName ? (projectId || generateId('proj')) : undefined);
    const finalProjectCode = matchedProject?.code;

    const currentUserName = currentUser?.name || '';
    const matchedAssigner = employees.find(
      (emp) =>
        emp.id === assignerId ||
        emp.code === assignerId ||
        emp.name === assignerId ||
        (assignerId && assignerId.toLowerCase() === emp.name.toLowerCase())
    );
    const matchedAssignee = employees.find(
      (emp) => emp.id === assigneeId || emp.code === assigneeId || emp.name === assigneeId
    );

    const now = new Date();
    const nowStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const tasksToScan = allTasks.length > 0 ? allTasks : taskService.getInitialTasks();
    let maxNum = 0;
    tasksToScan.forEach((t) => {
      const match = t.code?.match(/CV-(\d+)/i);
      if (match) {
        const num = parseInt(match[1], 10);
        if (!isNaN(num) && num > maxNum) {
          maxNum = num;
        }
      }
    });
    const autoCode = `CV-${String(Math.max(maxNum + 1, tasksToScan.length + 1)).padStart(3, '0')}`;
    const finalCode = (mode === 'edit' && task?.code) ? task.code : (code.trim() || autoCode);

    const payload: Task = {
      id: task?.id || generateId('task'),
      code: finalCode,
      title: title.trim(),
      description: description.trim(),
      projectId: finalProjectId,
      projectCode: finalProjectCode,
      projectName: finalProjectName || matchedProject?.name || undefined,
      department: department || (matchedAssignee ? matchedAssignee.department : 'Chung'),
      assignerId: matchedAssigner ? matchedAssigner.id : (currentUser?.id || undefined),
      assignerCode: matchedAssigner ? matchedAssigner.code : (currentUser?.code || undefined),
      assignerName: matchedAssigner ? matchedAssigner.name : (currentUserName || 'Quản trị viên'),
      assigneeId: matchedAssignee ? matchedAssignee.id : undefined,
      assigneeCode: matchedAssignee ? matchedAssignee.code : undefined,
      assigneeName: matchedAssignee ? matchedAssignee.name : 'Chưa phân công',
      collaborators,
      priority,
      status,
      startDate: startDate || nowStr.split(' ')[0],
      dueDate,
      completedAt: status === 'completed' ? (task?.completedAt || nowStr) : undefined,
      progress: status === 'completed' ? 100 : progress,
      estimatedHours: Number(estimatedHours) || 0,
      subtasks,
      tags,
      note: note.trim() || undefined,
      createdAt: task?.createdAt || nowStr,
      updatedAt: nowStr,
    };

    onSave(payload);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Main Drawer Container */}
      <div
        className="fixed inset-y-0 right-0 z-50 flex flex-col bg-card shadow-2xl border-l border-border transition-all duration-200 ease-in-out"
        style={{
          width: getDrawerWidthStyle(),
          maxWidth: '100vw',
          transform: 'none',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between gap-2 border-b border-border bg-card shrink-0 px-4 sm:px-6 h-16"
          style={{
            paddingTop: 'max(0.5rem, env(safe-area-inset-top, 0px))',
            paddingBottom: '0.5rem',
          }}
        >
          {/* Title */}
          <div className="flex items-center gap-2.5 min-w-0 w-[240px] sm:w-[260px] shrink-0">
            <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-base font-bold text-foreground leading-tight truncate">
                {mode === 'create' ? 'Thêm công việc mới' : `Cập nhật: ${code}`}
              </h2>
              <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                Phân công nhiệm vụ và tiến độ
              </p>
            </div>
          </div>

          {/* Module Tabs (Desktop / Tablet) */}
          <div className="hidden sm:flex items-center justify-center flex-1 px-2 min-w-0">
            {moduleTabSwitcher && mode === 'create' && (
              <ModuleTabSwitcher
                activeModule={moduleTabSwitcher.activeModule}
                onChangeModule={moduleTabSwitcher.onChangeModule}
              />
            )}
          </div>

          {/* Width Controls & Close */}
          <div className="flex items-center justify-end gap-1 w-[240px] sm:w-[260px] shrink-0">
            {/* Width Switcher (Tablet/Desktop) */}
            <div
              role="group"
              aria-label="Bề rộng ngăn bên"
              className="hidden sm:flex items-center gap-0.5 shrink-0 rounded-xl border border-border p-0.5 bg-muted/20"
            >
              <button
                type="button"
                aria-pressed={widthMode === 'narrow'}
                aria-label="Hẹp"
                title="Hẹp (560px)"
                onClick={() => setWidthMode('narrow')}
                className={`p-1.5 rounded-lg transition-colors active:scale-95 hover:bg-muted hover:text-foreground ${
                  widthMode === 'narrow' ? 'bg-card text-foreground shadow-2xs font-bold' : 'text-muted-foreground'
                }`}
              >
                <PanelRightClose className="w-4 h-4 stroke-[2.5px]" />
              </button>
              <button
                type="button"
                aria-pressed={widthMode === 'normal'}
                aria-label="Chuẩn"
                title="Chuẩn (780px)"
                onClick={() => setWidthMode('normal')}
                className={`p-1.5 rounded-lg transition-colors active:scale-95 hover:bg-muted hover:text-foreground ${
                  widthMode === 'normal' ? 'bg-card text-foreground shadow-2xs font-bold' : 'text-muted-foreground'
                }`}
              >
                <PanelRight className="w-4 h-4 stroke-[2.5px]" />
              </button>
              <button
                type="button"
                aria-pressed={widthMode === 'wide'}
                aria-label="Rộng"
                title="Rộng (1080px)"
                onClick={() => setWidthMode('wide')}
                className={`p-1.5 rounded-lg transition-colors active:scale-95 hover:bg-muted hover:text-foreground ${
                  widthMode === 'wide' ? 'bg-card text-foreground shadow-2xs font-bold' : 'text-muted-foreground'
                }`}
              >
                <PanelRightOpen className="w-4 h-4 stroke-[2.5px]" />
              </button>
            </div>

            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={widthMode === 'fullscreen' ? 'Thu nhỏ' : 'Mở toàn màn hình'}
              title={widthMode === 'fullscreen' ? 'Thu nhỏ' : 'Mở toàn màn hình'}
              className="hidden sm:flex p-1.5 rounded-lg text-muted-foreground transition-colors active:scale-95 hover:bg-muted hover:text-foreground"
            >
              {widthMode === 'fullscreen' ? (
                <Minimize2 className="w-4 h-4 stroke-[2.5px]" />
              ) : (
                <Maximize2 className="w-4 h-4 stroke-[2.5px]" />
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng"
              title="Đóng"
              className="p-1.5 sm:p-2 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors active:scale-95 shrink-0"
            >
              <X className="w-5 h-5 stroke-[2.5px]" />
            </button>
          </div>
        </div>

          {/* Module Tabs (Mobile) */}
          {moduleTabSwitcher && mode === 'create' && (
            <div className="flex sm:hidden items-center justify-center px-3 py-1.5 border-b border-border bg-muted/20 shrink-0">
              <ModuleTabSwitcher
                activeModule={moduleTabSwitcher.activeModule}
                onChangeModule={moduleTabSwitcher.onChangeModule}
              />
            </div>
          )}

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5 custom-scrollbar">
            {/* 1. Basic Info */}
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">
                  Tên / Tiêu đề công việc <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="VD: Thiết kế giao diện báo cáo doanh thu..."
                  className={`w-full h-9 px-3 rounded-lg border bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.title ? 'border-rose-500' : 'border-border'
                  }`}
                />
                {errors.title && <p className="text-[11px] text-rose-500">{errors.title}</p>}
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Mô tả chi tiết nội dung công việc</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Mô tả mục tiêu, yêu cầu đầu ra và tài liệu đính kèm..."
                  className="w-full p-3 rounded-lg border border-border bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* 2. Dự án, Người giao việc & Người thực hiện chính */}
            <div className="p-3.5 rounded-xl border border-border bg-muted/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Dự án trực thuộc */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5" title="Chọn dự án lớn mà công việc này trực thuộc, hoặc để nguyên nếu là công việc độc lập">
                      <FolderKanban className="w-3.5 h-3.5 text-purple-500" />
                      <span>Dự án trực thuộc</span>
                    </label>
                    <span className="text-[10px] text-muted-foreground font-normal">(Tùy chọn)</span>
                  </div>
                  {isCustomProject ? (
                    <div className="flex items-center gap-1.5">
                      <input
                        type="text"
                        autoFocus
                        value={customProjectName}
                        onChange={(e) => {
                          setCustomProjectName(e.target.value);
                          setProjectName(e.target.value);
                        }}
                        placeholder="Nhập tên dự án mới..."
                        className="flex-1 h-9 px-3 rounded-lg border border-primary bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setIsCustomProject(false);
                          setCustomProjectName('');
                          setProjectName('');
                          setProjectId('');
                        }}
                        title="Quay lại chọn từ danh sách"
                        className="h-9 px-2 rounded-lg border border-border bg-muted hover:bg-muted/80 text-[11px] text-muted-foreground hover:text-foreground shrink-0 transition-colors"
                      >
                        Chọn sẵn
                      </button>
                    </div>
                  ) : (
                    <select
                      value={projectName || projectId || ''}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === '__custom__') {
                          setIsCustomProject(true);
                          setCustomProjectName('');
                          setProjectName('');
                          setProjectId('');
                        } else {
                          setIsCustomProject(false);
                          if (!val) {
                            setProjectName('');
                            setProjectId('');
                          } else {
                            const found = projectOptions.find((p) => p.name === val || p.id === val);
                            setProjectName(found ? found.name : val);
                            setProjectId(found ? found.id : '');
                          }
                        }
                      }}
                      className="w-full h-9 px-3 rounded-lg border border-border bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">(Không thuộc dự án nào)</option>
                      {projectOptions.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.code ? `[${p.code}] ` : ''}{p.name}
                        </option>
                      ))}
                      <option value="__custom__">➕ Nhập dự án mới...</option>
                    </select>
                  )}
                </div>

                {/* Người giao việc */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    Người giao việc
                  </label>
                  <select
                    value={assignerId}
                    onChange={(e) => setAssignerId(e.target.value)}
                    className="w-full h-9 px-3 rounded-lg border border-border bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {currentUser?.name && !employees.some((e) => e.name.toLowerCase() === currentUser.name.toLowerCase()) && (
                      <option value={currentUser.id || currentUser.name}>
                        {currentUser.name} (Đang đăng nhập)
                      </option>
                    )}
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name} {emp.code ? `(${emp.code})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Người thực hiện chính */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary" />
                    Người thực hiện chính <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={assigneeId}
                    onChange={(e) => {
                      setAssigneeId(e.target.value);
                      if (errors.assigneeId) {
                        setErrors((prev) => {
                          const copy = { ...prev };
                          delete copy.assigneeId;
                          return copy;
                        });
                      }
                      const emp = employees.find((x) => x.id === e.target.value);
                      if (emp?.department && !department) {
                        setDepartment(emp.department);
                      }
                    }}
                    className={`w-full h-9 px-3 rounded-lg border bg-card text-xs focus:outline-none focus:ring-1 ${
                      errors.assigneeId ? 'border-rose-500 focus:ring-rose-500' : 'border-border focus:ring-primary'
                    }`}
                  >
                    <option value="">-- Chọn người thực hiện --</option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name} {emp.code ? `(${emp.code})` : ''}
                      </option>
                    ))}
                  </select>
                  {errors.assigneeId && <p className="text-[11px] text-rose-500">{errors.assigneeId}</p>}
                </div>
              </div>
            </div>

            {/* 4. Status, Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Trạng thái</label>
                <select
                  value={status}
                  onChange={(e) => {
                    const st = e.target.value as TaskStatus;
                    setStatus(st);
                    if (st === 'completed') setProgress(100);
                  }}
                  className="w-full h-9 px-2 rounded-lg border border-border bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="todo">Chưa thực hiện</option>
                  <option value="in_progress">Đang thực hiện</option>
                  <option value="completed">Đã hoàn thành</option>
                  <option value="cancelled">Đã hủy</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Ngày bắt đầu</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full h-9 px-2 rounded-lg border border-border bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">
                  Hạn chót (Deadline) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className={`w-full h-9 px-2 rounded-lg border bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.dueDate ? 'border-rose-500' : 'border-border'
                  }`}
                />
              </div>
            </div>

            {/* 6. Subtasks Checklist Builder */}
            <div className="space-y-3 p-3.5 rounded-xl border border-border bg-card">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-primary" />
                  <span>Danh sách nhiệm vụ con (Checklist)</span>
                </label>
                <span className="text-[11px] text-muted-foreground">
                  {subtasks.filter((s) => s.completed).length}/{subtasks.length} xong
                </span>
              </div>

              {/* Subtask Input Add */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={subtaskInput}
                  onChange={(e) => setSubtaskInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSubtask();
                    }
                  }}
                  placeholder="Nhập tên việc con và nhấn Enter..."
                  className="flex-1 h-9 px-3 rounded-lg border border-border bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={handleAddSubtask}
                  className="h-9 px-3 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 flex items-center gap-1 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Thêm</span>
                </button>
              </div>

              {/* Subtask Items */}
              <div className="space-y-1.5 pt-1">
                {subtasks.map((st) => (
                  <div
                    key={st.id}
                    className="flex items-center justify-between gap-2 p-2 rounded-lg border border-border/60 bg-muted/20 hover:bg-muted/40 transition-colors text-xs"
                  >
                    <label className="flex items-center gap-2 flex-1 cursor-pointer min-w-0">
                      <input
                        type="checkbox"
                        checked={st.completed}
                        onChange={() => handleToggleSubtask(st.id)}
                        className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                      />
                      <span className={`truncate ${st.completed ? 'line-through text-muted-foreground' : 'text-foreground font-medium'}`}>
                        {st.title}
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={() => handleRemoveSubtask(st.id)}
                      className="text-muted-foreground hover:text-rose-500 p-1 rounded transition-colors"
                      title="Xoá việc con"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Tags & Note */}
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Nhãn phân loại (Tags)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                    placeholder="VD: UI/UX, Báo cáo, Backend..."
                    className="flex-1 h-8 px-3 rounded-lg border border-border bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="h-8 px-2.5 rounded-lg border border-border hover:bg-muted text-foreground text-xs font-semibold"
                  >
                    Thêm tag
                  </button>
                </div>

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 text-[11px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20"
                      >
                        #{t}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(t)}
                          className="hover:text-rose-500 font-bold"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Ghi chú bổ sung</label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ghi chú nội bộ hoặc yêu cầu nghiệm thu..."
                  className="w-full h-9 px-3 rounded-lg border border-border bg-card text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </form>

          {/* Footer */}
          <div
            className="border-t border-border bg-card/95 backdrop-blur-xs shrink-0 px-4 sm:px-6 py-3 flex items-center justify-end gap-2.5"
            style={{
              paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))',
            }}
          >
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-9 px-4 text-xs border border-input bg-background hover:bg-muted text-foreground cursor-pointer active:scale-95"
            >
              Hủy
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-9 px-4 text-xs bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 cursor-pointer active:scale-95"
            >
              <Save className="w-3.5 h-3.5 mr-1.5 shrink-0" />
              <span>{mode === 'create' ? 'Lưu công việc' : 'Lưu thay đổi'}</span>
            </button>
          </div>
      </div>
    </>
  );
};
