<script setup>
  import { ref, watch } from 'vue'
  import { useFriendStore } from './stores/friendStore'
  import { useLoginStore } from './stores/loginStore'
  import { useRouter } from 'vue-router'
  const logoWhite = new URL('../public/logo/logo-white.png', import.meta.url)
    .href

  let blockOrNone = ref('none')
  let icon = ref('bi bi-list')

  const friendStore = useFriendStore()
  const loginStore = useLoginStore()
  const router = useRouter()

  const logout = () => {
    if (loginStore.loggedIn) {
      loginStore.logout()
      router.push('/')
    }
  }

  const selectedUser = ref(null)

  function toggleMenu() {
    blockOrNone.value = blockOrNone.value === 'none' ? 'block' : 'none'
    icon.value = icon.value === 'bi bi-list' ? 'bi bi-x' : 'bi bi-list'
  }

  watch(
    friendStore,
    () => {
      if (friendStore.currentFriend) {
        friendStore.fetchFriend(friendStore.currentFriend).then((result) => {
          selectedUser.value = result
        })
      }
    },
    { immediate: true }
  )
</script>

<template>
  <nav id="mobile_nav">
    <RouterLink to="/findfriend">
      <img :src="logoWhite" alt="logo" />
    </RouterLink>
    <i :class="icon" @click="toggleMenu" />
  </nav>

  <div id="router_links" :style="{ display: blockOrNone }">
    <RouterLink v-if="!loginStore.loggedIn" to="/" @click="toggleMenu"
      >Login</RouterLink
    >
    <RouterLink
      to="/"
      v-if="loginStore.loggedIn"
      @click="logout(), toggleMenu()"
    >
      Logout
    </RouterLink>
    <RouterLink v-if="loginStore.loggedIn" to="/findfriend" @click="toggleMenu"
      >Find Friend</RouterLink
    >
    <RouterLink v-if="loginStore.loggedIn" to="/myprofile" @click="toggleMenu"
      >My Profile</RouterLink
    >
    <RouterLink
      v-if="loginStore.loggedIn"
      :to="{
        path: '/chat',
        query: {
          language: selectedUser ? selectedUser.teaching_language : '',
          name: friendStore.currentFriend
        }
      }"
      @click="toggleMenu"
      >Chat</RouterLink
    >
  </div>

  <nav id="desktop_nav">
    <RouterLink v-if="!loginStore.loggedIn" to="/">Login</RouterLink>
    <RouterLink to="/" v-if="loginStore.loggedIn" @click="logout">
      Logout
    </RouterLink>
    <RouterLink v-if="loginStore.loggedIn" to="/findfriend"
      >Find Friend</RouterLink
    >
    <RouterLink v-if="loginStore.loggedIn" to="/myprofile"
      >My Profile</RouterLink
    >
    <RouterLink
      v-if="loginStore.loggedIn"
      :to="{
        path: '/chat',
        query: {
          language: selectedUser ? selectedUser.teaching_language : '',
          name: friendStore.currentFriend
        }
      }"
      >Chat</RouterLink
    >
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    background: #fa812f;
    margin: 0;
    img {
      height: 45px;
      padding-left: 5px;
    }
  }

  a {
    font-family: HeaderFont, serif;
    font-weight: 700;
    color: #fef3e2;
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.1);
    transition: transform 0.2s 80ms;
  }

  i {
    transform: scale(2.6);
    color: #fef3e2;
    cursor: pointer;
    margin-right: 1em;
  }

  #router_links a {
    background-color: #fa812f;
    display: block;
    text-align: center;
    padding-bottom: 1.5em;
    font-size: 1.2em;
  }

  #desktop_nav {
    display: none;
  }

  #mobile_nav {
    justify-content: space-between;
  }

  @media screen and (min-width: 600px) {
    #desktop_nav {
      display: flex;
    }

    #mobile_nav {
      display: none;
    }

    #router_links a {
      display: none;
    }
  }
</style>
