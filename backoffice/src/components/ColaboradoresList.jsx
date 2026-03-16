import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Plus, Search } from 'lucide-react';

export default function ColaboradoresList() {
  const [colaboradores, setColaboradores] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchColaboradores() {
    setLoading(true);
    const { data, error } = await supabase.from('colaborador').select('*').order('id_colaborador', { ascending: false });
    if (error) {
      console.error('Erro ao buscar colaboradores:', error);
    } else {
      setColaboradores(data || []);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchColaboradores();
  }, []);

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Carregando colaboradores...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Gestão de Colaboradores</h1>
        <button className="btn-primary">
          <Plus size={18} /> Novo Colaborador
        </button>
      </div>

      {colaboradores.length === 0 ? (
        <div className="data-card" style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ color: 'var(--text-muted)' }}>Nenhum colaborador cadastrado no momento.</p>
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((c) => (
              <tr key={c.id_colaborador}>
                <td><span className="badge">#{c.id_colaborador}</span></td>
                <td style={{ fontWeight: 500, color: '#fff' }}>{c.nome_colaborador}</td>
                <td>{c.email_colaborador || '-'}</td>
                <td>{c.tel_colaborador || '-'}</td>
                <td>{c.status_colaborador || '-'}</td>
                <td>
                  <button style={{ background: 'transparent', border:'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600}}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
