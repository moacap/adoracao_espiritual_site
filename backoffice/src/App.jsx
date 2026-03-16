import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Church, Users, LayoutDashboard } from 'lucide-react';
import ParoquiasList from './components/ParoquiasList';
import ColaboradoresList from './components/ColaboradoresList';
import './index.css';

function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
      </div>
      <div className="card-grid">
         <div className="data-card">
            <div className="data-card-header">
               <div>
                 <div className="data-card-title">Bem-vindo ao Backoffice</div>
                 <div className="data-card-subtitle">Gerencie Paróquias e Colaboradores</div>
               </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Utilize o menu lateral para navegar entre as diferentes seções. 
              Tudo já está integrado ao seu banco Supabase.
            </p>
         </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar Lateral */}
        <aside className="sidebar">
          <div className="brand">
            <Church className="brand-icon" size={28} />
            <span>Adoração</span>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} end>
              <LayoutDashboard size={20} /> Dashboard
            </NavLink>
            <NavLink to="/paroquias" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              <Church size={20} /> Paróquias
            </NavLink>
            <NavLink to="/colaboradores" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              <Users size={20} /> Colaboradores
            </NavLink>
          </nav>
        </aside>

        {/* Conteúdo Central */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/paroquias" element={<ParoquiasList />} />
            <Route path="/colaboradores" element={<ColaboradoresList />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
