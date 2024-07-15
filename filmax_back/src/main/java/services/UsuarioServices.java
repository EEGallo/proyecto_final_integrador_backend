package services;

import domain.models.Usuario;
import infrastructure.IPersistencia;
import infrastructure.database.MySQLPersistenciaImpl;

public class UsuarioServices implements IPersistencia {
    private IPersistencia persistencia = new MySQLPersistenciaImpl();
    @Override
    public void saveUser(Usuario user) {
        persistencia.saveUser(user);
    }

    @Override
    public Usuario findByUsername(String username) {
        return persistencia.findByUsername(username);
    }

    public void updateUser(Usuario user) {
        persistencia.updateUser(user);

    }

    public void deleteByUsername(String username) {
        persistencia.deleteByUsername(username);

    }
}
