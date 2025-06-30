<template>
  <div class="container">

    <aside class="sidebar">
      <div class="logo">
        <img src="../assets/logo_branca.png" alt="">

        <div class="name-logo">
          <h1>AIPO</h1>
          <h4>Acesso Inteligente a Portas</h4>
        </div>

      </div>
      
      <nav>
        <a href="" class="active"> <i class="fa-solid fa-user"></i>  Profile</a> 
        <a href="#" >Dashboard </a> <i class="fa-solid fa-square-poll-vertical"></i>
        <a href="#">Salas</a>
      </nav>
      <button class="logout">LOG OUT</button>
    </aside>

    <main class="main">
      <div class="banner">
        <img src="../assets/fundo.jpg" alt="">
      </div>
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
/* CONTAINER */
.container {
  display: flex;
  height: 100vh;
  width: 100%;
  background: rgba(240, 242, 245, 1);
}

/* SIDEBAR */
.sidebar {
  background: #347b37;
  color: #F2F4F1;
  padding: 1rem;
  border-radius: 15px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}

/* SIDEBAR LOGO */
.sidebar .logo{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.sidebar .logo img {
  width: 80px;
  height: 80px;
}

.sidebar .logo .name-logo h1{
  font-size: 1.8rem;
  margin: 0;
  padding: 0;
}

.sidebar .logo .name-logo h4 {
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  
}

/* NAV BAR */
.sidebar nav a {
  display: block;
  color: white;
  text-decoration: none;
  margin-top: 50px;
  border-radius: 3px;

}
.sidebar nav .active {
  font-weight: bold;
}
.logout {
  margin-top: 22rem;
  border-radius: 5px;
}
.main {
  flex: 1;
  padding: 1rem;
}

.banner  img {
  object-fit: cover;
  object-position: 0 30%;
  height: 250px;
  width: 100%;
  border-radius: 15px;
}
.profile-card {
  margin-left: 20px;
  margin-right: 20px;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 15px;
  position: relative;
  top: -50px;
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
  background-color: rgba(255, 255, 255, 0.92);
  padding: 1rem;
  flex: 1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.card h3 {
  margin-top: 0;
}
</style>
