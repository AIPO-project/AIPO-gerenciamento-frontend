<template>
  <div class="container">
    <div class="container-form">
      <h1>LOGIN AIPO</h1>
      <h3>Acesso Inteligente a Portas</h3>

      <form @submit.prevent="enviarDadosLogin">
        <input type="text" v-model="matricula" placeholder="Matrícula" required/>

        <input type="password" v-model="senha" placeholder="Senha" required/>

        <button type="submit">ENTRAR</button>
      </form>

      <div id="message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      matricula: "",
      senha: "",
      message: "",
    };
  },
  methods: {
    async enviarDadosLogin() {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({matricula: this.matricula, senha: this.senha,}),
        });

        const data = await response.json();

        if (response.ok) {
          console.log(data);
          this.message = "Login bem-sucedido!";
          const response = await fetch("http://127.0.0.1:5000/api/users/"+this.matricula, {
            method: "GET",
            headers: { "Authorization": "Bearer "+ data.access_token, "Content-Type": "application/json" },
            });
            if (response.ok) {
              this.$router.push('/about')
            }else {
                this.message = "Erro ao buscar dados do usuário, vá se cadastrar.";
            }
        } else {
          console.log(data);
          this.message = data.message || "Credenciais inválidas.";
        }
      } catch (error) {
        console.error("Erro:", error);
        this.message = "Erro ao conectar com o servidor.";
      }
    },
  },
};
</script>

<style scoped>
/* Seu CSS está perfeito, mantive o mesmo */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.container {
  background-image: url(../assets/fundo.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-form {
  width: 90%;
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.container h1 {
  margin-bottom: 10px;
  font-size: 2em;
  color: #333;
}

.container h3 {
  margin-bottom: 20px;
  font-weight: normal;
  color: #555;
}

form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

form button {
  width: 100%;
  padding: 10px;
  background-color: #37a52d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
  margin-top: 25px;
}

form button:hover {
  background-color: #1f6918;
}

form p {
  margin-top: 10px;
  color: #333;
}

form a {
  color: #37a52d;
  text-decoration: none;
  font-weight: bold;
}

form a:hover {
  text-decoration: underline;
}
</style>
