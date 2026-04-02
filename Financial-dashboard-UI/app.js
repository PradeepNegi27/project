'use strict';

const SEED_TRANSACTIONS = [
  // Jan
  { id: 't001', date: '2024-01-05', desc: 'Monthly Salary', amount: 85000, type: 'income',  category: 'Salary' },
  { id: 't002', date: '2024-01-08', desc: 'Rent Payment',   amount: 22000, type: 'expense', category: 'Housing' },
  { id: 't003', date: '2024-01-12', desc: 'Grocery Store',  amount: 4200,  type: 'expense', category: 'Food' },
  { id: 't004', date: '2024-01-15', desc: 'Netflix',        amount: 649,   type: 'expense', category: 'Entertainment' },
  { id: 't005', date: '2024-01-18', desc: 'Freelance Work', amount: 15000, type: 'income',  category: 'Freelance' },
  { id: 't006', date: '2024-01-22', desc: 'Petrol',         amount: 3000,  type: 'expense', category: 'Transport' },
  { id: 't007', date: '2024-01-26', desc: 'Dinner Out',     amount: 2100,  type: 'expense', category: 'Food' },
  { id: 't008', date: '2024-01-30', desc: 'Electricity',    amount: 1800,  type: 'expense', category: 'Utilities' },

  // Feb
  { id: 't009', date: '2024-02-05', desc: 'Monthly Salary', amount: 85000, type: 'income',  category: 'Salary' },
  { id: 't010', date: '2024-02-07', desc: 'Rent Payment',   amount: 22000, type: 'expense', category: 'Housing' },
  { id: 't011', date: '2024-02-10', desc: 'Gym Membership', amount: 1499,  type: 'expense', category: 'Health' },
  { id: 't012', date: '2024-02-13', desc: 'Grocery Store',  amount: 3800,  type: 'expense', category: 'Food' },
  { id: 't013', date: '2024-02-18', desc: 'Movie Tickets',  amount: 900,   type: 'expense', category: 'Entertainment' },
  { id: 't014', date: '2024-02-20', desc: 'Uber Rides',     amount: 1200,  type: 'expense', category: 'Transport' },
  { id: 't015', date: '2024-02-25', desc: 'Bonus',          amount: 20000, type: 'income',  category: 'Salary' },
  { id: 't016', date: '2024-02-28', desc: 'Internet Bill',  amount: 999,   type: 'expense', category: 'Utilities' },

  // Mar
  { id: 't017', date: '2024-03-05', desc: 'Monthly Salary', amount: 85000, type: 'income',  category: 'Salary' },
  { id: 't018', date: '2024-03-07', desc: 'Rent Payment',   amount: 22000, type: 'expense', category: 'Housing' },
  { id: 't019', date: '2024-03-10', desc: 'Clothing Shop',  amount: 5500,  type: 'expense', category: 'Shopping' },
  { id: 't020', date: '2024-03-14', desc: 'Grocery Store',  amount: 4500,  type: 'expense', category: 'Food' },
  { id: 't021', date: '2024-03-18', desc: 'Flight Tickets', amount: 12000, type: 'expense', category: 'Travel' },
  { id: 't022', date: '2024-03-22', desc: 'Freelance Work', amount: 22000, type: 'income',  category: 'Freelance' },
  { id: 't023', date: '2024-03-26', desc: 'Medical Bill',   amount: 3200,  type: 'expense', category: 'Health' },
  { id: 't024', date: '2024-03-30', desc: 'Petrol',         amount: 2800,  type: 'expense', category: 'Transport' },

  // Apr
  { id: 't025', date: '2024-04-05', desc: 'Monthly Salary', amount: 85000, type: 'income',  category: 'Salary' },
  { id: 't026', date: '2024-04-07', desc: 'Rent Payment',   amount: 22000, type: 'expense', category: 'Housing' },
  { id: 't027', date: '2024-04-11', desc: 'Restaurant',     amount: 3100,  type: 'expense', category: 'Food' },
  { id: 't028', date: '2024-04-15', desc: 'Amazon Shopping',amount: 7800,  type: 'expense', category: 'Shopping' },
  { id: 't029', date: '2024-04-20', desc: 'Freelance Work', amount: 18000, type: 'income',  category: 'Freelance' },
  { id: 't030', date: '2024-04-24', desc: 'Electricity',    amount: 1600,  type: 'expense', category: 'Utilities' },

  // May
  { id: 't031', date: '2024-05-05', desc: 'Monthly Salary', amount: 85000, type: 'income',  category: 'Salary' },
  { id: 't032', date: '2024-05-07', desc: 'Rent Payment',   amount: 22000, type: 'expense', category: 'Housing' },
  { id: 't033', date: '2024-05-09', desc: 'Spotify',        amount: 119,   type: 'expense', category: 'Entertainment' },
  { id: 't034', date: '2024-05-14', desc: 'Grocery Store',  amount: 4100,  type: 'expense', category: 'Food' },
  { id: 't035', date: '2024-05-19', desc: 'Hotel Stay',     amount: 9000,  type: 'expense', category: 'Travel' },
  { id: 't036', date: '2024-05-25', desc: 'Yoga Class',     amount: 2000,  type: 'expense', category: 'Health' },
  { id: 't037', date: '2024-05-28', desc: 'Dividend',       amount: 5000,  type: 'income',  category: 'Investment' },

  // Jun
  { id: 't038', date: '2024-06-05', desc: 'Monthly Salary', amount: 85000, type: 'income',  category: 'Salary' },
  { id: 't039', date: '2024-06-07', desc: 'Rent Payment',   amount: 22000, type: 'expense', category: 'Housing' },
  { id: 't040', date: '2024-06-10', desc: 'Grocery Store',  amount: 3900,  type: 'expense', category: 'Food' },
  { id: 't041', date: '2024-06-15', desc: 'Concert Tickets',amount: 4500,  type: 'expense', category: 'Entertainment' },
  { id: 't042', date: '2024-06-20', desc: 'Freelance Work', amount: 25000, type: 'income',  category: 'Freelance' },
  { id: 't043', date: '2024-06-24', desc: 'Uber Rides',     amount: 1500,  type: 'expense', category: 'Transport' },
  { id: 't044', date: '2024-06-28', desc: 'Internet Bill',  amount: 999,   type: 'expense', category: 'Utilities' },
];

const EXPENSE_CATEGORIES = ['Food','Housing','Transport','Entertainment','Health','Shopping','Utilities','Travel','Education','Other'];
const INCOME_CATEGORIES  = ['Salary','Freelance','Investment','Gift','Other Income'];

const CATEGORY_COLORS = {
  'Food':          '#f59e42',
  'Housing':       '#5b8def',
  'Transport':     '#9b7fe8',
  'Entertainment': '#f06a6a',
  'Health':        '#2dd4a0',
  'Shopping':      '#e879a0',
  'Utilities':     '#64b6f7',
  'Travel':        '#fbbf24',
  'Education':     '#34d399',
  'Salary':        '#2dd4a0',
  'Freelance':     '#a3e635',
  'Investment':    '#c9a84c',
  'Other':         '#94a3b8',
  'Other Income':  '#94a3b8',
  'Gift':          '#f472b6',
};

//Application State 
const STORAGE_KEY = 'ledger_transactions';

let state = {
  transactions: [],
  filters: { search: '', type: '', category: '', month: '' },
  sort: 'date-desc',
  role: 'viewer',
  charts: { trend: null, donut: null, monthly: null },
  chartPeriod: '6m',
  editingId: null,
};

//Persistence
function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      state.transactions = JSON.parse(saved);
    } else {
      state.transactions = SEED_TRANSACTIONS.map(t => ({ ...t }));
      saveData();
    }
    const savedRole = localStorage.getItem('ledger_role');
    if (savedRole) state.role = savedRole;
    const savedTheme = localStorage.getItem('ledger_theme');
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  } catch (e) {
    state.transactions = SEED_TRANSACTIONS.map(t => ({ ...t }));
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.transactions));
}

//Utilities
function fmt(n) {
  return '₹' + Math.abs(n).toLocaleString('en-IN', { maximumFractionDigits: 0 });
}

function fmtDate(d) {
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
}

function monthKey(dateStr) {
  return dateStr.slice(0, 7); 
}

function monthLabel(key) {
  const [y, m] = key.split('-');
  return new Date(+y, +m - 1).toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
}

function genId() {
  return 't' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
}

//Derived State
function totals() {
  const income  = state.transactions.filter(t => t.type === 'income').reduce((s,t) => s + t.amount, 0);
  const expense = state.transactions.filter(t => t.type === 'expense').reduce((s,t) => s + t.amount, 0);
  return { income, expense, balance: income - expense };
}

function categoryTotals() {
  const map = {};
  state.transactions.filter(t => t.type === 'expense').forEach(t => {
    map[t.category] = (map[t.category] || 0) + t.amount;
  });
  return Object.entries(map).sort((a,b) => b[1]-a[1]);
}

function monthlyData() {
  const map = {};
  state.transactions.forEach(t => {
    const k = monthKey(t.date);
    if (!map[k]) map[k] = { income: 0, expense: 0 };
    map[k][t.type] += t.amount;
  });
  const keys = Object.keys(map).sort();
  return { keys, map };
}

// Role Management 
function setRole(role) {
  state.role = role;
  localStorage.setItem('ledger_role', role);
  document.getElementById('btn-viewer').classList.toggle('active', role === 'viewer');
  document.getElementById('btn-admin').classList.toggle('active', role === 'admin');
  document.getElementById('mobile-role-badge').textContent = role.charAt(0).toUpperCase() + role.slice(1);

  const adminEls = document.querySelectorAll('.admin-only');
  adminEls.forEach(el => {
    el.style.display = role === 'admin' ? (el.tagName === 'TD' || el.tagName === 'TH' ? 'table-cell' : 'flex') : 'none';
  });
  renderAll();
}

//Theme 
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('ledger_theme', next);
  document.getElementById('theme-label').textContent = isDark ? 'Dark' : 'Light';
  document.getElementById('theme-icon-moon').style.display = isDark ? 'none' : 'inline';
  document.getElementById('theme-icon-sun').style.display  = isDark ? 'inline' : 'none';
  // Rebuild charts for new theme
  renderCharts();
}

//Navigation
function switchSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  document.querySelector(`.nav-item[data-section="${name}"]`).classList.add('active');
  closeSidebarMobile();
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    switchSection(item.dataset.section);
  });
});

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  let overlay = document.getElementById('sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    overlay.className = 'sidebar-overlay';
    overlay.onclick = closeSidebarMobile;
    document.body.appendChild(overlay);
  }
  overlay.classList.toggle('open');
}

function closeSidebarMobile() {
  document.getElementById('sidebar').classList.remove('open');
  const o = document.getElementById('sidebar-overlay');
  if (o) o.classList.remove('open');
}

//  Render Summary Cards 
function renderCards() {
  const { income, expense, balance } = totals();
  const savings = income > 0 ? ((income - expense) / income * 100).toFixed(1) : 0;
  document.getElementById('card-balance').textContent = fmt(balance);
  document.getElementById('card-income').textContent  = fmt(income);
  document.getElementById('card-expense').textContent = fmt(expense);
  document.getElementById('card-savings').textContent = savings + '%';

  const balanceTrend = document.getElementById('card-balance-trend');
  if (balance >= 0) {
    balanceTrend.textContent = '↑ Net positive';
    balanceTrend.className = 'card-trend positive';
  } else {
    balanceTrend.textContent = '↓ Net deficit';
    balanceTrend.className = 'card-trend negative';
  }

  const savTrend = document.getElementById('card-savings-trend');
  savTrend.textContent = savings >= 20 ? '✓ Healthy savings' : savings >= 10 ? '~ Moderate savings' : '! Low savings';
  savTrend.className = 'card-trend ' + (savings >= 20 ? 'positive' : savings >= 10 ? '' : 'negative');
}

// Recent Transactions 
function renderRecent() {
  const recent = [...state.transactions]
    .sort((a,b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  const el = document.getElementById('recent-transactions-list');
  if (!recent.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">📂</div><div>No transactions yet</div></div>';
    return;
  }

  el.innerHTML = recent.map(t => `
    <div class="txn-mini-row">
      <div>
        <div class="txn-mini-desc">${escHtml(t.desc)}</div>
        <div class="txn-mini-meta">${fmtDate(t.date)}</div>
      </div>
      <span class="txn-mini-cat">${escHtml(t.category)}</span>
      <div class="txn-mini-amount amount-${t.type}">
        ${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}
      </div>
    </div>
  `).join('');
}

//  Charts 
function getChartColors() {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  return {
    grid: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)',
    text: isDark ? '#7a849e' : '#5a6480',
    gold: '#c9a84c',
    green: '#2dd4a0',
    red:   '#f06a6a',
  };
}

function getFilteredMonths() {
  const { keys } = monthlyData();
  const n = state.chartPeriod === '1m' ? 1 : state.chartPeriod === '3m' ? 3 : 6;
  return keys.slice(-n);
}

function renderTrendChart() {
  const ctx = document.getElementById('balanceTrendChart').getContext('2d');
  const c = getChartColors();
  const { map } = monthlyData();
  const months = getFilteredMonths();

  // Cumulative balance per month
  const allMonths = Object.keys(map).sort();
  let running = 0;
  const cumulMap = {};
  allMonths.forEach(k => {
    running += (map[k].income || 0) - (map[k].expense || 0);
    cumulMap[k] = running;
  });

  const labels = months.map(monthLabel);
  const data   = months.map(k => cumulMap[k] || 0);

  if (state.charts.trend) state.charts.trend.destroy();

  state.charts.trend = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data,
        borderColor: c.gold,
        borderWidth: 2,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 220);
          gradient.addColorStop(0, 'rgba(201,168,76,0.18)');
          gradient.addColorStop(1, 'rgba(201,168,76,0)');
          return gradient;
        },
        pointBackgroundColor: c.gold,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#141824',
          borderColor: '#1e2538',
          borderWidth: 1,
          titleColor: '#7a849e',
          bodyColor: '#e8ecf5',
          padding: 10,
          callbacks: { label: ctx => ' ' + fmt(ctx.raw) }
        }
      },
      scales: {
        x: {
          grid: { color: c.grid, drawBorder: false },
          ticks: { color: c.text, font: { family: "'DM Mono'", size: 10 } }
        },
        y: {
          grid: { color: c.grid, drawBorder: false },
          ticks: {
            color: c.text, font: { family: "'DM Mono'", size: 10 },
            callback: v => '₹' + (v >= 1000 ? (v/1000).toFixed(0) + 'k' : v)
          }
        }
      }
    }
  });
}

function renderDonutChart() {
  const ctx = document.getElementById('categoryDonut').getContext('2d');
  const cats = categoryTotals().slice(0, 6);
  const total = cats.reduce((s,[,v]) => s+v, 0);

  const labels = cats.map(([k]) => k);
  const data   = cats.map(([,v]) => v);
  const colors = labels.map(l => CATEGORY_COLORS[l] || '#94a3b8');

  if (state.charts.donut) state.charts.donut.destroy();

  if (!cats.length) {
    document.getElementById('donut-legend').innerHTML = '<div style="color:var(--text-muted);font-size:0.78rem;">No expense data</div>';
    return;
  }

  state.charts.donut = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 0, hoverOffset: 6 }] },
    options: {
      responsive: false,
      cutout: '68%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#141824',
          borderColor: '#1e2538',
          borderWidth: 1,
          titleColor: '#7a849e',
          bodyColor: '#e8ecf5',
          padding: 10,
          callbacks: { label: ctx => ' ' + fmt(ctx.raw) + ' (' + (ctx.raw/total*100).toFixed(1) + '%)' }
        }
      }
    }
  });

  document.getElementById('donut-legend').innerHTML = cats.map(([name, val]) => `
    <div class="legend-item">
      <div class="legend-dot" style="background:${CATEGORY_COLORS[name] || '#94a3b8'}"></div>
      <span class="legend-name">${name}</span>
      <span class="legend-pct">${(val/total*100).toFixed(0)}%</span>
    </div>
  `).join('');
}

function renderMonthlyCompareChart() {
  const ctx = document.getElementById('monthlyCompareChart').getContext('2d');
  const c = getChartColors();
  const { keys, map } = monthlyData();

  const labels   = keys.map(monthLabel);
  const incomes  = keys.map(k => map[k].income  || 0);
  const expenses = keys.map(k => map[k].expense || 0);

  if (state.charts.monthly) state.charts.monthly.destroy();

  state.charts.monthly = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Income',
          data: incomes,
          backgroundColor: 'rgba(45,212,160,0.7)',
          borderRadius: 4,
          borderSkipped: false,
        },
        {
          label: 'Expenses',
          data: expenses,
          backgroundColor: 'rgba(240,106,106,0.7)',
          borderRadius: 4,
          borderSkipped: false,
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: { color: c.text, font: { family: "'DM Mono'", size: 10 }, usePointStyle: true, pointStyleWidth: 8 }
        },
        tooltip: {
          backgroundColor: '#141824',
          borderColor: '#1e2538',
          borderWidth: 1,
          titleColor: '#7a849e',
          bodyColor: '#e8ecf5',
          padding: 10,
          callbacks: { label: ctx => ' ' + ctx.dataset.label + ': ' + fmt(ctx.raw) }
        }
      },
      scales: {
        x: {
          grid: { color: c.grid },
          ticks: { color: c.text, font: { family: "'DM Mono'", size: 10 } }
        },
        y: {
          grid: { color: c.grid },
          ticks: {
            color: c.text, font: { family: "'DM Mono'", size: 10 },
            callback: v => '₹' + (v >= 1000 ? (v/1000).toFixed(0) + 'k' : v)
          }
        }
      }
    }
  });
}

function renderCharts() {
  renderTrendChart();
  renderDonutChart();
  renderMonthlyCompareChart();
}

function setChartPeriod(period, btn) {
  state.chartPeriod = period;
  document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTrendChart();
}

// ── Filters & Transactions Table ──────────────────────────
function populateFilterDropdowns() {
  const cats = [...new Set(state.transactions.map(t => t.category))].sort();
  const catSel = document.getElementById('filter-category');
  catSel.innerHTML = '<option value="">All Categories</option>' + cats.map(c => `<option value="${c}">${c}</option>`).join('');

  const months = [...new Set(state.transactions.map(t => monthKey(t.date)))].sort().reverse();
  const monthSel = document.getElementById('filter-month');
  monthSel.innerHTML = '<option value="">All Months</option>' + months.map(m => `<option value="${m}">${monthLabel(m)}</option>`).join('');
}

function applyFilters() {
  state.filters.search   = document.getElementById('search-input').value.toLowerCase();
  state.filters.type     = document.getElementById('filter-type').value;
  state.filters.category = document.getElementById('filter-category').value;
  state.filters.month    = document.getElementById('filter-month').value;
  state.sort             = document.getElementById('sort-by').value;
  renderTransactionsTable();
}

function clearFilters() {
  document.getElementById('search-input').value   = '';
  document.getElementById('filter-type').value    = '';
  document.getElementById('filter-category').value = '';
  document.getElementById('filter-month').value   = '';
  document.getElementById('sort-by').value        = 'date-desc';
  state.filters = { search: '', type: '', category: '', month: '' };
  state.sort = 'date-desc';
  renderTransactionsTable();
}

function getFilteredSorted() {
  let txns = [...state.transactions];

  if (state.filters.search)   txns = txns.filter(t => t.desc.toLowerCase().includes(state.filters.search) || t.category.toLowerCase().includes(state.filters.search));
  if (state.filters.type)     txns = txns.filter(t => t.type === state.filters.type);
  if (state.filters.category) txns = txns.filter(t => t.category === state.filters.category);
  if (state.filters.month)    txns = txns.filter(t => monthKey(t.date) === state.filters.month);

  const [field, dir] = state.sort.split('-');
  txns.sort((a,b) => {
    const va = field === 'date' ? a.date : a.amount;
    const vb = field === 'date' ? b.date : b.amount;
    return dir === 'asc' ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
  });

  return txns;
}

function renderTransactionsTable() {
  const txns = getFilteredSorted();
  const tbody = document.getElementById('txn-tbody');
  const empty = document.getElementById('txn-empty');
  const label = document.getElementById('txn-count-label');

  label.textContent = `${txns.length} record${txns.length !== 1 ? 's' : ''}`;

  if (!txns.length) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  const isAdmin = state.role === 'admin';

  tbody.innerHTML = txns.map(t => `
    <tr>
      <td>${fmtDate(t.date)}</td>
      <td><span style="font-weight:500;color:var(--text-primary)">${escHtml(t.desc)}</span></td>
      <td><span class="cat-badge">${escHtml(t.category)}</span></td>
      <td><span class="type-badge type-${t.type}">${t.type === 'income' ? '↑' : '↓'} ${t.type}</span></td>
      <td class="txn-mini-amount amount-${t.type}">${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}</td>
      ${isAdmin ? `
        <td>
          <div class="action-btns">
            <button class="btn-edit" onclick="openModal('${t.id}')">Edit</button>
            <button class="btn-delete" onclick="deleteTransaction('${t.id}')">Delete</button>
          </div>
        </td>
      ` : ''}
    </tr>
  `).join('');
}

// ── Insights ──────────────────────────────────────────────
function renderInsights() {
  const cats = categoryTotals();
  if (cats.length) {
    const [topCat, topAmt] = cats[0];
    document.getElementById('insight-top-cat-name').textContent = topCat;
    document.getElementById('insight-top-cat-amount').textContent = fmt(topAmt) + ' total spent';
  } else {
    document.getElementById('insight-top-cat-name').textContent = 'No data';
  }

  // Best saving month
  const { keys, map } = monthlyData();
  let bestMonth = null, bestSaved = -Infinity;
  keys.forEach(k => {
    const saved = (map[k].income||0) - (map[k].expense||0);
    if (saved > bestSaved) { bestSaved = saved; bestMonth = k; }
  });
  document.getElementById('insight-best-month-name').textContent = bestMonth ? monthLabel(bestMonth) : '—';
  document.getElementById('insight-best-month-amt').textContent  = bestMonth ? fmt(bestSaved) + ' saved' : '';

  // Avg monthly expense
  if (keys.length) {
    const totalExp = keys.reduce((s,k) => s + (map[k].expense||0), 0);
    const avgExp = totalExp / keys.length;
    document.getElementById('insight-avg-exp').textContent = fmt(avgExp);
  }

  // Income/Expense ratio
  const { income, expense } = totals();
  if (expense > 0) {
    const ratio = (income / expense).toFixed(2);
    document.getElementById('insight-ratio').textContent = ratio + 'x';
    document.getElementById('insight-ratio-sub').textContent = ratio >= 1 ? 'Income exceeds expenses ✓' : 'Expenses exceed income ⚠';
  }

  // Category breakdown
  const totalExp = cats.reduce((s,[,v]) => s+v, 0);
  const breakdownEl = document.getElementById('category-breakdown-list');
  if (!cats.length) {
    breakdownEl.innerHTML = '<div class="empty-state"><div class="empty-icon">📊</div><div>No expense data</div></div>';
    return;
  }
  breakdownEl.innerHTML = cats.map(([name, val]) => `
    <div class="cat-breakdown-row">
      <div class="cat-breakdown-name">${name}</div>
      <div class="cat-breakdown-bar-wrap">
        <div class="cat-breakdown-bar" style="width:${(val/totalExp*100).toFixed(1)}%;background:${CATEGORY_COLORS[name]||'#94a3b8'}"></div>
      </div>
      <div class="cat-breakdown-amount">${fmt(val)}</div>
    </div>
  `).join('');
}

// ── Modal ─────────────────────────────────────────────────
function openModal(id) {
  if (state.role !== 'admin') return;
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('open');

  updateCategoryOptions();

  if (id) {
    const txn = state.transactions.find(t => t.id === id);
    if (!txn) return;
    state.editingId = id;
    document.getElementById('modal-title').textContent = 'Edit Transaction';
    document.getElementById('edit-id').value     = id;
    document.getElementById('form-desc').value   = txn.desc;
    document.getElementById('form-amount').value = txn.amount;
    document.getElementById('form-type').value   = txn.type;
    document.getElementById('form-date').value   = txn.date;
    updateCategoryOptions();
    document.getElementById('form-category').value = txn.category;
  } else {
    state.editingId = null;
    document.getElementById('modal-title').textContent = 'Add Transaction';
    document.getElementById('edit-id').value     = '';
    document.getElementById('form-desc').value   = '';
    document.getElementById('form-amount').value = '';
    document.getElementById('form-type').value   = 'expense';
    document.getElementById('form-date').value   = new Date().toISOString().slice(0,10);
    updateCategoryOptions();
  }
  document.getElementById('form-error').style.display = 'none';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('open');
  state.editingId = null;
}

function updateCategoryOptions() {
  const type = document.getElementById('form-type').value;
  const cats = type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
  const sel = document.getElementById('form-category');
  sel.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
}

function saveTransaction() {
  const desc   = document.getElementById('form-desc').value.trim();
  const amount = parseFloat(document.getElementById('form-amount').value);
  const type   = document.getElementById('form-type').value;
  const cat    = document.getElementById('form-category').value;
  const date   = document.getElementById('form-date').value;
  const errEl  = document.getElementById('form-error');

  if (!desc || !amount || !date || amount <= 0) {
    errEl.textContent = 'Please fill in all fields with valid values.';
    errEl.style.display = 'block';
    return;
  }

  if (state.editingId) {
    const idx = state.transactions.findIndex(t => t.id === state.editingId);
    if (idx !== -1) state.transactions[idx] = { id: state.editingId, desc, amount, type, category: cat, date };
  } else {
    state.transactions.unshift({ id: genId(), desc, amount, type, category: cat, date });
  }

  saveData();
  document.getElementById('modal-overlay').classList.remove('open');
  renderAll();
}

function deleteTransaction(id) {
  if (!confirm('Delete this transaction?')) return;
  state.transactions = state.transactions.filter(t => t.id !== id);
  saveData();
  renderAll();
}

// ── Escape HTML ───────────────────────────────────────────
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Export ────────────────────────────────────────────────
function exportData(format) {
  const txns = state.transactions;
  if (format === 'json') {
    const blob = new Blob([JSON.stringify(txns, null, 2)], { type: 'application/json' });
    download(blob, 'ledger-transactions.json');
  } else {
    const header = 'Date,Description,Category,Type,Amount\n';
    const rows = txns.map(t => `${t.date},"${t.desc}",${t.category},${t.type},${t.amount}`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    download(blob, 'ledger-transactions.csv');
  }
}

function download(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

// ── Render All ────────────────────────────────────────────
function renderAll() {
  populateFilterDropdowns();
  renderCards();
  renderRecent();
  renderCharts();
  renderTransactionsTable();
  renderInsights();
}

// ── Date display ──────────────────────────────────────────
document.getElementById('dashboard-date').textContent =
  new Date().toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'long', year:'numeric' });

// ── Init ──────────────────────────────────────────────────
loadData();
renderAll();
setRole(state.role);

// Restore theme icon state
(function() {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  document.getElementById('theme-label').textContent = isDark ? 'Light' : 'Dark';
  document.getElementById('theme-icon-moon').style.display = isDark ? 'inline' : 'none';
  document.getElementById('theme-icon-sun').style.display  = isDark ? 'none' : 'inline';
})();
