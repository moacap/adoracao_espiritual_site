import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Plus, Search } from 'lucide-react';

export default function ParoquiasList() {
  const [paroquias, setParoquias] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchParoquias() {
    setLoading(true);
    // Para fins de demonstração estamos buscando as paróquias
    const { data, error } = await supabase.from('paroquia').select('*').order('id_paroquia', { ascending: false });
    if (error) {
      console.error('Erro ao buscar paróquias:', error);
    } else {
      setParoquias(data || []);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchParoquias();
  }, []);

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Carregando paróquias...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Gestão de Paróquias</h1>
        <button className="btn-primary">
          <Plus size={18} /> Nova Paróquia
        </button>
      </div>

      {paroquias.length === 0 ? (
        <div className="data-card" style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ color: 'var(--text-muted)' }}>Nenhuma paróquia cadastrada no momento.</p>
          <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>O banco Supabase já está respondendo.</p>
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome da Paróquia</th>
              <th>Pároco</th>
              <th>Cidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {paroquias.map((p) => (
              <tr key={p.id_paroquia}>
                <td><span className="badge">#{p.id_paroquia}</span></td>
                <td style={{ fontWeight: 500, color: '#fff' }}>{p.nome_paroquia}</td>
                <td>{p.paroco_paroquia || '-'}</td>
                <td>{p.cidade_paroquia || '-'}</td>
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
