// Public repositories from https://github.com/kadukapuma
// Images live in public/assets/projects/github/. Projects without screenshots
// get a generated cover (see RepoCover in sections/GithubProjects.jsx).
// To add real screenshots later, drop files in that folder and list them in `gallery`.

const img = (file) => `${import.meta.env.BASE_URL}assets/projects/github/${file}`;
const GH = 'https://github.com/kadukapuma';

export const githubProfileUrl = GH;

export const githubProjects = [
  {
    id: 'fixflow',
    title: 'FixFlow — Multi-Tenant Service Center SaaS',
    category: 'SaaS Platform',
    status: 'Live • fixflow.kreethya.com',
    statusColor: 'border-mint/40 bg-mint/10 text-mint',
    repoUrl: `${GH}/FixFlow`,
    liveUrl: 'https://fixflow.kreethya.com',
    liveLabel: 'fixflow.kreethya.com',
    description:
      'Multi-tenant business management platform for service centers, with subdomain-based tenant identification and a separate MySQL database per company.',
    detailedDescription:
      'FixFlow lets repair and service businesses run their whole operation from one workspace. Each company registers, is approved by a platform admin, and is then provisioned automatically with its own subdomain and its own isolated MySQL database. A middleware reads the subdomain from the Host header and switches the database connection per request, so no tenant can ever see another tenant\'s data. Inside a workspace, teams manage service jobs, technicians, stock, purchasing, suppliers, customers and a double-entry ledger.',
    highlights: [
      'Database-per-tenant isolation with dynamic MySQL connections resolved from the subdomain',
      'Queued tenant provisioning: approval creates the database, runs migrations and seeds it',
      'Service jobs, technicians, commissions and PDF invoices / service tickets',
      'Inventory, purchase orders, purchase returns, stock movements and multiple stores',
      'Double-entry ledger with journal entries, customer and supplier balances',
      'Company registration with email OTP, subscription receipts and admin approval flow',
    ],
    tags: ['Laravel', 'React', 'MySQL', 'Multi-Tenancy', 'Vite', 'Queues'],
    icons: ['laravel', 'react', 'mysql'],
    accent: 'mint',
    image: img('fixflow-home.png'),
    gallery: [
      {
        src: img('fixflow-home.png'),
        title: 'Workspace Sign-In',
        category: 'Web App',
        description: 'Users find their company workspace by name or subdomain before signing in.',
      },
    ],
  },
  {
    id: 'hp-erp',
    title: 'HP ERP — Hire Purchase Management System',
    category: 'Enterprise ERP',
    status: 'Live Demo • hp.kreethya.com',
    statusColor: 'border-mint/40 bg-mint/10 text-mint',
    repoUrl: 'https://github.com/ShalukaPiuminda/HP_Kreethya',
    liveUrl: 'https://hp.kreethya.com',
    liveLabel: 'hp.kreethya.com',
    liveCta: 'Try Free Demo',
    collaboration: 'Team project',
    description:
      'Full ERP for hire purchase retail businesses: HP agreements and instalments, sales, purchasing, stock, cheques, accounting and reports across branches.',
    detailedDescription:
      'HP ERP runs the day-to-day operations of a hire purchase retailer across multiple branches. It manages hire purchase agreements with guarantors, schemes and instalment schedules, collects instalment and customer payments, and tracks arrears with automated reminder letters and SMS. Alongside this sit cash and credit sales, returns, purchase orders, GRNs with batch and serial tracking, stock transfers and adjustments, service tickets, cheques, banking, expenses and a chart of accounts, all feeding standard and user-built reports. Built as a team project using a Laravel 11 API, a Next.js 16 frontend and Docker. A free demo is available at hp.kreethya.com.',
    highlights: [
      'Hire purchase agreements with guarantors, schemes, instalment schedules and HP-to-sale conversion',
      'Instalment collection, customer advances, cheque tracking and automated reminder letters & SMS',
      'Multi-branch, multi-store stock with batch / serial tracking, barcodes, transfers and reorder alerts',
      'Purchasing: purchase orders, GRNs, supplier payments and price revisions',
      'Accounting: chart of accounts, vouchers, banking, petty cash, expenses and day-end balances',
      'Printable invoices and delivery orders, a custom report builder, role permissions and system backups',
    ],
    tags: ['Laravel 11', 'Next.js', 'TypeScript', 'MySQL', 'Docker', 'Tailwind CSS'],
    icons: ['laravel', 'next', 'docker'],
    accent: 'royal',
    image: img('hp-erp-dashboard.png'),
    gallery: [
      {
        src: img('hp-erp-dashboard.png'),
        title: 'Branch Dashboard',
        category: 'Web App',
        description:
          'Stock value, customer receivables, supplier payables, HP outstanding, sales, purchases, collections and cash flow for the selected branch and period, plus quick actions.',
      },
      {
        src: img('hp-erp-agreement.png'),
        title: 'New Hire Purchase Agreement',
        category: 'Web App',
        description:
          'Customer, issue store, guarantors, scheme, instalment due day and contract items with batches, barcode scan and discounts. Stock is dispatched when the contract is posted.',
      },
    ],
  },
  {
    id: 'kreethya-website',
    title: 'Kreethya.com — Company Website',
    category: 'Website',
    status: 'Live • kreethya.com',
    statusColor: 'border-mint/40 bg-mint/10 text-mint',
    repoUrl: `${GH}/Kreethya.com-website`,
    liveUrl: 'https://kreethya.com',
    liveLabel: 'kreethya.com',
    description:
      'Official website for Kreethya (Pvt) Ltd, a software development company: animated hero, services, portfolio, process and contact sections.',
    detailedDescription:
      'The public website for Kreethya (Pvt) Ltd, built with React and Vite using the React Compiler. It presents the company\'s services (web, mobile, custom software, UI/UX, cloud and support), showcases delivered products such as DriveCare, the real-time vehicle service booking and garage management ecosystem, explains the delivery process and collects project enquiries. It uses an animated intro, a friendly mascot assistant and responsive layouts tuned for mobile.',
    highlights: [
      'Showcases DriveCare — real-time vehicle service booking & garage management ecosystem',
      'React + Vite with the React Compiler enabled',
      'Animated logo intro and interactive mascot assistant',
      'Services, work showcase, process and contact sections',
      'Optimised WebP project images and fully responsive layout',
    ],
    tags: ['React', 'DriveCare', 'Vite', 'CSS', 'Responsive Design'],
    icons: ['react', 'vite'],
    accent: 'mint',
    image: img('kreethya-home.jpg'),
    gallery: [
      {
        src: img('kreethya-home.jpg'),
        title: 'Home Page Hero',
        category: 'Website',
        description: 'Landing hero with the company tagline and calls to action.',
      },
      {
        src: img('kreethya-section.jpg'),
        title: 'Services Section',
        category: 'Website',
        description: 'Web, mobile, custom software, UI/UX, cloud and support services.',
      },
    ],
  },
  {
    id: 'jewellery-system',
    title: 'Aureon — Jewellery Management System',
    category: 'Business Management System',
    status: 'In Development • aureon.kreethya.com',
    statusColor: 'border-sand/40 bg-sand/10 text-sand',
    repoUrl: `${GH}/-jewellery--system`,
    liveUrl: 'https://aureon.kreethya.com/',
    liveLabel: 'aureon.kreethya.com',
    liveCta: 'Visit',
    description:
      'Full shop management for a jewellery business: gold prices by karat, barcode-tagged stock, craftsmen jobs, sales, credit and profit reports.',
    detailedDescription:
      'An Express REST API with a React (Vite + MUI) frontend and a MySQL 8 database, built to run a jewellery shop end to end. It covers daily gold prices per karat, categories and barcode-tagged items, suppliers and purchases, craftsmen and their gold/cash accounts, customers, billing, payments and credit, plus reports for sales, profit, stock, wastage and balances. Access is controlled by roles with per-user allow/block exceptions, checked on every API request.',
    highlights: [
      'Business overview dashboard: live 24K / 22K gold price (LKR per pound), 30-day price movement and 7-day sales performance',
      'At-a-glance cards for sales today, customer credit, overdue bills, stock, supplier balances and workshop workload',
      'Seven modules: users & roles, gold prices, items, purchases, craft jobs, sales, reports',
      'Role-based permissions with per-user Allow / Block exceptions enforced on every request',
      'Craftsman gold and cash accounts tracking gold issued, returned and wastage',
      'Barcode tags for items and daily gold price setup per karat',
      'Account lockout after 5 failed logins and a full activity log',
      'Single schema.sql with tables, seed data and reporting views',
    ],
    tags: ['Node.js', 'Express', 'React', 'MUI', 'MySQL', 'JWT'],
    icons: ['node', 'react', 'mysql'],
    accent: 'sand',
    image: img('jewellery-dashboard.png'),
    gallery: [
      {
        src: img('jewellery-dashboard.png'),
        title: 'Business Overview Dashboard',
        category: 'Web App',
        description:
          'Live gold prices, 30-day price movement, and daily cards for sales, credit, overdue bills, stock, supplier balances and workshop workload.',
      },
    ],
  },
  {
    id: 'task-manager',
    title: 'TaskFlow — Task & Staff Management',
    category: 'Business Management System',
    status: 'Laravel • React',
    statusColor: 'border-mint/40 bg-mint/10 text-mint',
    repoUrl: `${GH}/Task-Manager`,
    description:
      'Admin and staff portal for assigning customer tasks, tracking time spent and reviewing each staff member\'s work.',
    detailedDescription:
      'TaskFlow is a Laravel API with a React frontend that helps a team manage customer work. Admins get an executive overview of completed, pending, urgent, repeating and unassigned tasks, a status breakdown, and staff time-logged analytics. Tasks are created per customer with a type and priority, and staff can create their own tasks, which wait in an unassigned queue until an admin hands them to someone. Staff get their own home screen with assigned tasks, can log time against them and attach files.',
    highlights: [
      'Executive dashboard: completed, pending, urgent, repeating and unassigned task counts with a status breakdown',
      'Unassigned task queue: staff-created tasks that only an admin can assign to a staff member',
      'Staff time-logged analytics with Today / This Week / This Month / custom date filters',
      'Task types, priorities, urgent tasks and repeating tasks per customer',
      'Separate admin and staff portals with role-based access, client requests and file attachments',
      'Deleted task recovery, team management and a dark mode',
    ],
    tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    icons: ['laravel', 'react'],
    accent: 'mint',
    image: img('taskflow-dashboard.png'),
    gallery: [
      {
        src: img('taskflow-dashboard.png'),
        title: 'Executive Overview',
        category: 'Admin Portal',
        description:
          'Task counts, status overview, the unassigned task queue and staff time-logged analytics.',
      },
    ],
  },
  {
    id: 'password-manager',
    title: 'Python Password Manager',
    category: 'Desktop App • Security',
    status: 'AES-256-GCM Encryption',
    statusColor: 'border-royal/40 bg-royal/10 text-lavender',
    repoUrl: `${GH}/PythonPasswordManager`,
    description:
      'Secure, fully offline desktop password manager with AES-256-GCM encryption, PBKDF2 key derivation and a master password.',
    detailedDescription:
      'A Tkinter desktop app for storing and managing passwords safely on your own machine. The whole vault is one encrypted blob stored in AppData: the key is derived from the master password with PBKDF2 (200,000 iterations), data is encrypted with AES-256-GCM using a fresh salt and nonce, and the GCM tag guards integrity. It includes a password generator, search, notes and copy-to-clipboard, and ships as a portable .exe.',
    highlights: [
      'AES-256-GCM encryption with PBKDF2 (200,000 iterations) key derivation',
      'Random 16-byte salt and 12-byte nonce per encryption; GCM tag verifies integrity',
      'Master password required at launch; no cloud, fully offline',
      'Add / edit / delete entries, search, notes and one-click copy',
      'Customisable strong password generator',
      'Packaged as a portable Windows .exe with PyInstaller',
    ],
    tags: ['Python', 'Tkinter', 'PyCryptodome', 'Cryptography', 'PyInstaller'],
    icons: ['python'],
    accent: 'royal',
    image: img('password-manager-2.png'),
    gallery: [
      {
        src: img('password-manager-2.png'),
        title: 'Password Vault',
        category: 'Desktop App',
        description: 'Main window with the password list, search and the entry editor.',
      },
      {
        src: img('password-manager-1.png'),
        title: 'Master Password Unlock',
        category: 'Desktop App',
        description: 'The vault is unlocked with a master password at startup.',
      },
    ],
  },
  {
    id: 'backup-manager',
    title: 'Database Backup Manager',
    category: 'DevOps & Infrastructure',
    status: 'Laravel 12 • React • TypeScript',
    statusColor: 'border-aqua/40 bg-aqua/10 text-aqua',
    repoUrl: `${GH}/backup_manager`,
    description:
      'Web panel that discovers MariaDB, MySQL and PostgreSQL databases, runs encrypted scheduled backups to several destinations, verifies them and restores them safely.',
    detailedDescription:
      'A self-hosted control panel for database backups. It discovers databases on the local server or on remote servers through a built-in SSH tunnel, follows glob rules to pick up new tenant databases automatically, and runs backups as mariadb-dump / pg_dump piped through zstd. Every dump is integrity-checked, encrypted with age, hashed with SHA-256 and shipped to local disk, SFTP or S3-compatible storage via rclone, where each copy is verified again. A guided restore wizard takes a safety backup first and compares table counts afterwards.',
    highlights: [
      'Auto-discovery every 15 minutes with glob rules (e.g. kreethya_*) and approval alerts',
      'dump → zstd → integrity check → age encryption → SHA-256 → JSON manifest pipeline',
      'SSH tunnels with per-connection keys restricted to the database port; nothing installed remotely',
      'Local, SFTP and S3 destinations via rclone, each copy verified by size and checksum',
      'Grandfather-father-son retention that never deletes the newest good backup',
      'Restore wizard with safety backup, live progress, roles, 2FA, audit log and IP allowlist',
    ],
    tags: ['Laravel 12', 'React', 'TypeScript', 'Inertia', 'shadcn/ui', 'PostgreSQL', 'rclone'],
    icons: ['laravel', 'typescript', 'postgresql'],
    accent: 'aqua',
    image: img('backup-dashboard.png'),
    gallery: [
      {
        src: img('backup-dashboard.png'),
        title: 'Health Dashboard',
        category: 'Web App',
        description:
          'Overall backup health, 24-hour success count, stale backups, runs in progress and newly discovered databases waiting for approval.',
      },
      {
        src: img('backup-databases.png'),
        title: 'Database Discovery & Selection',
        category: 'Web App',
        description:
          'Every discovered database with its connection, state (included, pending, excluded, missing), size, table count and last good backup.',
      },
      {
        src: img('backup-runs.png'),
        title: 'Backup Run History',
        category: 'Web App',
        description:
          'Scheduled, manual and pre-restore runs filterable by status, trigger, plan and date, with size and duration.',
      },
      {
        src: img('backup-restore.png'),
        title: 'Restore',
        category: 'Web App',
        description:
          'Restore over the original database or into a new one; a safety backup is taken first.',
      },
    ],
  },
  {
    id: 'admin-command-gui',
    title: 'AdminCommandGUI — Windows Admin Command Panel',
    category: 'Desktop App • Windows Tools',
    status: 'Python • Tkinter',
    statusColor: 'border-aqua/40 bg-aqua/10 text-aqua',
    repoUrl: `${GH}/AdminCommandGUI-Windows-Admin-Command-Panel`,
    compact: true, // shown under "More Projects"
    description:
      'Run common Windows admin commands (restart services, check IPs, reload Nginx) from one-click buttons with output in a built-in terminal.',
    detailedDescription:
      'A lightweight Tkinter app that replaces repetitive Command Prompt work. Predefined commands sit in a sidebar; clicking one runs it in a background thread and streams the output into a scrollable terminal pane, so the window never freezes. The app requests Administrator rights automatically and stores its task list in a JSON file in AppData.',
    highlights: [
      'One-click admin commands such as ipconfig, net start / net stop and Nginx reload',
      'Real-time command output in a built-in terminal pane',
      'Automatic elevation to Administrator via ctypes',
      'Threaded execution keeps the GUI responsive',
      'Editable command list persisted as JSON in %APPDATA%',
    ],
    tags: ['Python', 'Tkinter', 'subprocess', 'Threading', 'Windows'],
    icons: ['python'],
    accent: 'aqua',
    gallery: [],
  },
  {
    id: 'backup-cleanup',
    title: 'Backup Cleanup & Scheduler',
    category: 'Desktop App • Automation',
    status: 'Python • Task Scheduler',
    statusColor: 'border-orange/40 bg-orange/10 text-orange',
    repoUrl: `${GH}/Backup-Cleanup-and-Scheduler`,
    compact: true, // shown under "More Projects"
    description:
      'Automatically deletes old .zip / .rar backups from a folder, with a GUI for settings and Windows Task Scheduler integration.',
    detailedDescription:
      'A small Windows utility that keeps backup folders from filling up the disk. You choose a folder, how many days of backups to keep and a schedule; the app removes older .zip and .rar files and registers a Windows Task Scheduler job (daily, weekly or once) through schtasks.exe so cleanup keeps running on its own. Settings are saved to a JSON config and the tool ships as a portable .exe.',
    highlights: [
      'Deletes .zip / .rar backups older than a configurable number of days',
      'Creates Daily, Weekly or Once jobs in Windows Task Scheduler via schtasks.exe',
      'Simple GUI for folder, retention and schedule settings',
      'Config persisted as JSON in %APPDATA%; portable .exe build',
    ],
    tags: ['Python', 'Tkinter', 'Windows Task Scheduler', 'Automation'],
    icons: ['python'],
    accent: 'orange',
    gallery: [],
  },
  {
    id: 'fake-bsod',
    title: 'Windows BSoD Simulator',
    category: 'Desktop App • Fun',
    status: 'Python • Tkinter',
    statusColor: 'border-coral/40 bg-coral/10 text-coral',
    repoUrl: `${GH}/Fake-windows-bsod`,
    compact: true, // shown under "More Projects"
    description:
      'A harmless prank app that shows a realistic Windows 10/11 Blue Screen with a progress counter and QR code, plus a secret exit hotkey.',
    detailedDescription:
      'A full-screen, always-on-top Tkinter window that recreates the Windows 10/11 Blue Screen of Death after a configurable delay. It animates the progress percentage, generates a QR code like the real stop-code page, blocks Alt+F4 and Delete, and closes only with the secret Ctrl+Alt+Insert hotkey. Built for demos and harmless pranks.',
    highlights: [
      'Pixel-faithful Windows 10/11 BSoD layout in full screen',
      'Animated progress counter and generated QR code',
      'Blocks Alt+F4 and Delete; secret Ctrl+Alt+Insert exit',
      'Configurable delay and update speed; threaded timing',
    ],
    tags: ['Python', 'Tkinter', 'Pillow', 'qrcode', 'keyboard'],
    icons: ['python'],
    accent: 'coral',
    gallery: [],
  },
];
