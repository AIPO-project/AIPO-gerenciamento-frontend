<template>
  <div class="container">
    <aside class="sidebar">
      <h1 class="logo">AIPO</h1>
      <p>Acesso Inteligente a Portas</p>
      <nav>
        <a href="#" class="active">Profile</a>
        <a href="#">Dashboard</a>
        <a href="#">Salas</a>
      </nav>
      <button class="logout">LOG OUT</button>
    </aside>

    <main class="main">
      <header class="banner"></header>
      <section class="profile-card">
        <div class="user-info">
          <img :src="user.photo" alt="User Photo" />
          <div>
            <h2>{{ user.name }}</h2>
            <p>{{ user.role }}</p>
          </div>
        </div>
        <div class="grid">
          <div class="card">
            <h3>Configurações</h3>
            <label>
              <input type="checkbox" v-model="settings.ativo" /> Usuário ativo
            </label>
            <label>
              <input type="checkbox" v-model="settings.chave" /> Chave cadastrada
            </label>
            <input type="text" v-model="novaChave" placeholder="Registrar Chave" />
            <button class="delete" @click="apagarChave">Apagar Chave</button>
          </div>

          <div class="card">
            <h3>Salas Autorizadas</h3>
            <p v-if="salas.length === 0">Nenhuma sala autorizada.</p>
            <p v-for="(sala, index) in salas" :key="index">
              {{ sala.nome }}<br /><small>{{ sala.codigo }}</small>
            </p>
          </div>

          <div class="card">
            <h3>Últimos Acessos</h3>
            <p v-if="acessos.length === 0">Nenhum acesso recente.</p>
            <p v-for="(acesso, index) in acessos" :key="index">
              {{ acesso.local }}<br /><small>{{ acesso.horario }}</small>
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "PerfilUsuario",
  data() {
    return {
      user: {
        name: "USUARIO",
        role: "aluno / gerente",
        photo: "" // URL da foto
      },
      settings: {
        ativo: true,
        chave: true
      },
      novaChave: "",
      salas: [], // Lista de salas autorizadas
      acessos: [] // Lista de últimos acessos
    };
  },
  methods: {
    apagarChave() {
      this.novaChave = "";
      this.settings.chave = false;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
.sidebar {
  width: 250px;
  background: #222;
  color: white;
  padding: 1rem;
}
.sidebar .logo {
  font-size: 1.8rem;
}
.sidebar nav a {
  display: block;
  color: white;
  margin: 0.5rem 0;
}
.sidebar nav .active {
  font-weight: bold;
}
.logout {
  margin-top: 1rem;
}
.main {
  flex: 1;
  padding: 1rem;
}
.banner {
  height: 150px;
  background: #ddd;
}
.profile-card {
  background: #f9f9f9;
  padding: 1rem;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.user-info img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ccc;
}
.grid {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.card {
  background: white;
  padding: 1rem;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.card h3 {
  margin-top: 0;
}
</style>
