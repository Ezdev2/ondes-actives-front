<template>
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-white/50 via-ondes-very-light-red-50 to-ondes-light-red-200 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="animate-fade-in-up">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Mentions <span class="bg-gradient-to-r from-ondes-green-400 to-ondes-green-600 bg-clip-text text-transparent">Légales</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Informations légales et conditions d'utilisation du site Ondes Actives.
          </p>
        </div>
      </div>
    </section>

    <!-- Legal Content -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          <div class="bg-gradient-to-r from-rose-50 to-ondes-red-50 p-8 rounded-3xl border border-rose-100 mb-12">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Éditeur du site</h2>
            <div class="space-y-2 text-gray-700">
              <p><strong>Raison sociale :</strong> Ondes Actives</p>
              <p><strong>Forme juridique :</strong> [À compléter]</p>
              <p><strong>Capital social :</strong> [À compléter]</p>
              <p><strong>Siège social :</strong> 123 Avenue des Entrepreneurs, 75001 Paris, France</p>
              <p><strong>RCS :</strong> [À compléter]</p>
              <p><strong>SIRET :</strong> [À compléter]</p>
              <p><strong>TVA intracommunautaire :</strong> [À compléter]</p>
              <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
              <p><strong>Email :</strong> contact@ondesactives.com</p>
            </div>
          </div>

          <div class="space-y-8">
            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Directeur de la publication</h2>
              <p class="text-gray-700">
                Le directeur de la publication est Laurie Le Séhan, en qualité de dirigeante de la société Ondes Actives.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Hébergement</h2>
              <p class="text-gray-700">
                Ce site est hébergé par Netlify, Inc.<br>
                2325 3rd Street, Suite 296<br>
                San Francisco, CA 94107<br>
                États-Unis
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Propriété intellectuelle</h2>
              <p class="text-gray-700 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p class="text-gray-700">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Données personnelles</h2>
              <p class="text-gray-700 mb-4">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p class="text-gray-700">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@ondesactives.com
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
              <p class="text-gray-700 mb-4">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite. 
                Les cookies sont de petits fichiers texte stockés sur votre ordinateur par votre navigateur web.
              </p>
              <p class="text-gray-700">
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter le fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Responsabilité</h2>
              <p class="text-gray-700 mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p class="text-gray-700">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                merci de bien vouloir le signaler par email à contact@ondesactives.com en décrivant le problème de la manière la plus précise possible.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Liens hypertextes</h2>
              <p class="text-gray-700 mb-4">
                Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet 
                ne sauraient engager la responsabilité de Ondes Actives.
              </p>
              <p class="text-gray-700">
                De même, la responsabilité de Ondes Actives ne saurait être engagée si un préjudice était causé aux utilisateurs 
                par le dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Droit applicable</h2>
              <p class="text-gray-700">
                Tout litige en relation avec l'utilisation du site www.ondesactives.com est soumis au droit français. 
                Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
              </p>
            </section>
          </div>

          <div class="mt-12 p-6 bg-gray-50 rounded-2xl">
            <p class="text-sm text-gray-600 text-center">
              <strong>Dernière mise à jour :</strong> {{ new Date().toLocaleDateString('fr-FR') }}
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
</script>