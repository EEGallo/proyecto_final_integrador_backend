package infrastructure;

import domain.models.Usuario;

public interface IPersistencia {
    public void saveUser(Usuario user);
    Usuario findByUsername(String username);
    void updateUser(Usuario user);
    void deleteByUsername(String username);
}
