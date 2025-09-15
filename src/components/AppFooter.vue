<template>
  <header class="bg-white shadow-sm mt-4">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo and tagline -->
        <div class="">
          <div class="flex items-center space-x-2 mb-2">
            <router-link to="/" class="flex items-center space-x-2">
              <img :src="logo" alt="">
            </router-link>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed max-w-xs">
            Solutions opérationnelles<br>
            pour petites structures
          </p>
        </div>

        <!-- Navigation -->
        <nav class="flex justify-center">
          <ul class="flex  md:flex-row flex-col space-x-12 text-gray-700">
            <li>
              <RouterLink to="/" class="hover:text-green-500 transition-colors">
                Accueil
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/#services" class="hover:text-green-500 transition-colors">
                Solutions
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:text-green-500 transition-colors">
                À Propos
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blog" class="hover:text-green-500 transition-colors">
                Blog
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="hover:text-green-500 transition-colors">
                Contact
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- Social Icons -->
        <div class="flex justify-end">
          <div class="flex space-x-2">
            <a href="https://www.instagram.com/ondes_actives?igsh=MXE1c3F4OW1vbzZu"
              class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="currentColor" width="24px" height="24px" viewBox="0 0 0.72 0.72"
                xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                <path
                  d="M0.52 0.164a0.036 0.036 0 1 0 0.036 0.036 0.036 0.036 0 0 0 -0.036 -0.036m0.138 0.073a0.228 0.228 0 0 0 -0.014 -0.073 0.147 0.147 0 0 0 -0.035 -0.053 0.141 0.141 0 0 0 -0.053 -0.034 0.219 0.219 0 0 0 -0.073 -0.014C0.452 0.06 0.442 0.06 0.36 0.06s-0.092 0 -0.124 0.002a0.219 0.219 0 0 0 -0.073 0.014 0.144 0.144 0 0 0 -0.053 0.034 0.141 0.141 0 0 0 -0.034 0.053 0.219 0.219 0 0 0 -0.014 0.073C0.06 0.268 0.06 0.278 0.06 0.36s0 0.092 0.002 0.124a0.219 0.219 0 0 0 0.014 0.073 0.141 0.141 0 0 0 0.034 0.053 0.144 0.144 0 0 0 0.053 0.034 0.219 0.219 0 0 0 0.073 0.014C0.268 0.66 0.278 0.66 0.36 0.66s0.092 0 0.124 -0.002a0.219 0.219 0 0 0 0.073 -0.014 0.141 0.141 0 0 0 0.053 -0.034 0.145 0.145 0 0 0 0.035 -0.053 0.228 0.228 0 0 0 0.014 -0.073c0 -0.032 0.002 -0.042 0.002 -0.124s0 -0.092 -0.002 -0.124M0.604 0.48a0.168 0.168 0 0 1 -0.01 0.056 0.092 0.092 0 0 1 -0.022 0.034 0.096 0.096 0 0 1 -0.034 0.022 0.168 0.168 0 0 1 -0.056 0.01c-0.03 0.002 -0.041 0.002 -0.12 0.002s-0.09 0 -0.12 -0.002a0.171 0.171 0 0 1 -0.058 -0.009 0.099 0.099 0 0 1 -0.033 -0.022 0.09 0.09 0 0 1 -0.022 -0.034 0.165 0.165 0 0 1 -0.012 -0.057c0 -0.03 -0.002 -0.041 -0.002 -0.12s0 -0.09 0.002 -0.12a0.165 0.165 0 0 1 0.01 -0.057A0.09 0.09 0 0 1 0.15 0.15a0.093 0.093 0 0 1 0.033 -0.024A0.171 0.171 0 0 1 0.24 0.116c0.03 0 0.041 -0.002 0.12 -0.002s0.09 0 0.12 0.002a0.168 0.168 0 0 1 0.056 0.01 0.092 0.092 0 0 1 0.036 0.024 0.093 0.093 0 0 1 0.022 0.033 0.168 0.168 0 0 1 0.01 0.057c0.002 0.03 0.002 0.041 0.002 0.12s0 0.09 -0.002 0.12M0.36 0.206A0.154 0.154 0 1 0 0.514 0.36 0.154 0.154 0 0 0 0.36 0.206m0 0.254A0.1 0.1 0 1 1 0.46 0.36 0.1 0.1 0 0 1 0.36 0.46">
                </path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/laurie-le-s%C3%A9han-884ab756"
              class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Green separator line -->
  <div class="w-full h-[1px] bg-green-500"></div>

  <!-- Footer content -->
  <footer class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-12">
        <!-- Solutions column -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-6">Solutions</h3>
          <ul class="space-y-3 text-gray-600">
            <li>Assistance administrative</li>
            <li>Gestion des ressources humaines</li>
            <li>Appui à la gestion d'entreprise</li>
            <li>Création de contenus</li>
          </ul>
        </div>

        <!-- À propos column -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-6">À propos</h3>
          <ul class="space-y-3 text-gray-600">
            <li class="hover:text-green-500 transition-colors"><a href="/about#value">Des valeurs</a></li>
            <li class="hover:text-green-500 transition-colors"><a href="/about#mission">Une mission et une vision</a></li>
            <li>Entreprenariat solidaire et responsable</li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-6">Contact</h3>
          <ul class="space-y-3 text-gray-600">
            <li><a href="mailto:contact@ondesactives.com"
                class="font-medium">contact@ondesactives.com</a></li>
            <li><a href="tel:+33123456789" class="font-medium">+33 06 47 12 68 51</a></li>
            <li>5 avenue Vital Biraben, 64100 Bayonne</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <!-- Bottom footer -->
  <div class="bg-white border-t border-green-600 py-6">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex md:flex-row flex-col-reverse gap-4 justify-between items-center text-sm text-gray-600">
        <div>OndesActives - 2025</div>
        <div class="flex space-x-8">
          <RouterLink to="/legal" class="hover:text-green-500 transition-colors">
          Mentions Légales
        </RouterLink>
        <RouterLink to="/privacy" class="hover:text-green-500 transition-colors">
          Politique de Confidentialité
        </RouterLink>
        <RouterLink to="/cookies-policy" class="hover:text-green-500 transition-colors">
          Politique de cookies
        </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import logo from "@/assets/logo.svg"
</script>
<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

footer {
  background: #fff;
  border-top: 1px solid #ddd;
  padding: 40px 20px 20px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px solid #4CAF50;
  padding-bottom: 30px;
  margin-bottom: 20px;
}

.footer-column {
  flex: 1 1 200px;
  margin: 10px 0;
}

.footer-column h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin: 6px 0;
  font-size: 14px;
  color: #333;
}

.footer-contact ul li a {
  color: #333;
  text-decoration: none;
}

.footer-contact ul li a:hover {
  color: #4CAF50;
}

.footer-social {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.footer-social a img {
  width: 28px;
  height: 28px;
}

.footer-bottom {
  border-top: 1px solid #4CAF50;
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #333;
}

.footer-links {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.footer-links a {
  text-decoration: none;
  color: #333;
}

.footer-links a:hover {
  color: #4CAF50;
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
  }
}
</style>