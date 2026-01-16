<script setup>
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Reusing HeaderStart but forcing non-sticky style initially if needed, 
         though HeaderStart handles scroll logic. -->
    <HeaderStart always-opaque />

    <main class="pt-32 pb-20 container mx-auto px-4 lg:px-20">
      <div class="max-w-4xl mx-auto">
        <h1
          class="text-4xl md:text-5xl font-serif text-site-dark mb-12 text-center"
        >
          Política de Privacidade
        </h1>

        <div class="prose prose-lg text-site-dark/80 max-w-none text-justify">
          <p>A sua privacidade é importante para nós.</p>
          <p>
            É política do Adoção Espiritual respeitar a sua privacidade em
            relação a qualquer informação sua que possamos coletar no site
            Adoção Espiritual, e outros sites que possuímos e operamos.
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </p>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </p>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </p>
          <p>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade.
          </p>
          <p>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </p>
          <p>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contato conosco.
          </p>

          <h2 class="text-2xl font-serif text-site-dark mt-10 mb-6">
            Política de Cookies Adoção Espiritual
          </h2>

          <h3>O que são cookies?</h3>
          <p>
            Como é prática comum em quase todos os sites profissionais, este
            site usa cookies, que são pequenos arquivos baixados no seu
            computador, para melhorar sua experiência. Esta página descreve
            quais informações eles coletam, como as usamos e por que às vezes
            precisamos armazenar esses cookies. Também compartilharemos como
            você pode impedir que esses cookies sejam armazenados, no entanto,
            isso pode fazer o downgrade ou 'quebrar' certos elementos da
            funcionalidade do site.
          </p>

          <h3>Como usamos os cookies?</h3>
          <p>
            Utilizamos cookies por vários motivos, detalhados abaixo.
            Infelizmente, na maioria dos casos, não existem opções padrão do
            setor para desativar os cookies sem desativar completamente a
            funcionalidade e os recursos que eles adicionam a este site. É
            recomendável que você deixe todos os cookies se não tiver certeza se
            precisa ou não deles, caso sejam usados para fornecer um serviço que
            você usa.
          </p>

          <h3>Desativar cookies</h3>
          <p>
            Você pode impedir a configuração de cookies ajustando as
            configurações do seu navegador (consulte a Ajuda do navegador para
            saber como fazer isso). Esteja ciente de que a desativação de
            cookies afetará a funcionalidade deste e de muitos outros sites que
            você visita. A desativação de cookies geralmente resultará na
            desativação de determinadas funcionalidades e recursos deste site.
            Portanto, é recomendável que você não desative os cookies.
          </p>

          <h3>Cookies que definimos</h3>
          <ul class="list-none pl-0 space-y-6 mt-4">
            <li>
              Cookies relacionados à conta Se você criar uma conta conosco,
              usaremos cookies para o gerenciamento do processo de inscrição e
              administração geral. Esses cookies geralmente serão excluídos
              quando você sair do sistema, porém, em alguns casos, eles poderão
              permanecer posteriormente para lembrar as preferências do seu site
              ao sair.
            </li>
            <li>
              Cookies relacionados ao login Utilizamos cookies quando você está
              logado, para que possamos lembrar dessa ação. Isso evita que você
              precise fazer login sempre que visitar uma nova página. Esses
              cookies são normalmente removidos ou limpos quando você efetua
              logout para garantir que você possa acessar apenas a recursos e
              áreas restritas ao efetuar login.
            </li>
            <li>
              Cookies relacionados a boletins por e-mail Este site oferece
              serviços de assinatura de boletim informativo ou e-mail e os
              cookies podem ser usados para lembrar se você já está registrado e
              se deve mostrar determinadas notificações válidas apenas para
              usuários inscritos/não inscritos.
            </li>
            <li>
              Pedidos processando cookies relacionados Este site oferece
              facilidades de comércio eletrônico ou pagamento e alguns cookies
              são essenciais para garantir que seu pedido seja lembrado entre as
              páginas, para que possamos processá-lo adequadamente.
            </li>
            <li>
              Cookies relacionados a pesquisas Periodicamente, oferecemos
              pesquisas e questionários para fornecer informações interessantes,
              ferramentas úteis ou para entender nossa base de usuários com mais
              precisão. Essas pesquisas podem usar cookies para lembrar quem já
              participou numa pesquisa ou para fornecer resultados precisos após
              a alteração das páginas.
            </li>
            <li>
              Cookies relacionados a formulários Quando você envia dados por
              meio de um formulário como os encontrados nas páginas de contacto
              ou nos formulários de comentários, os cookies podem ser
              configurados para lembrar os detalhes do usuário para
              correspondência futura.
            </li>
            <li>
              Cookies de preferências do site Para proporcionar uma ótima
              experiência neste site, fornecemos a funcionalidade para definir
              suas preferências de como esse site é executado quando você o usa.
              Para lembrar suas preferências, precisamos definir cookies para
              que essas informações possam ser chamadas sempre que você
              interagir com uma página for afetada por suas preferências.
            </li>
          </ul>

          <h3>Cookies de Terceiros</h3>
          <p>
            Em alguns casos especiais, também usamos cookies fornecidos por
            terceiros confiáveis. A seção a seguir detalha quais cookies de
            terceiros você pode encontrar através deste site.
          </p>
          <ul class="list-disc pl-5 space-y-2 mb-6">
            <li>
              Este site usa o Google Analytics, que é uma das soluções de
              análise mais difundidas e confiáveis da Web, para nos ajudar a
              entender como você usa o site e como podemos melhorar sua
              experiência. Esses cookies podem rastrear itens como quanto tempo
              você gasta no site e as páginas visitadas, para que possamos
              continuar produzindo conteúdo atraente. Para mais informações
              sobre cookies do Google Analytics, consulte a página oficial do
              Google Analytics.
            </li>
            <li>
              As análises de terceiros são usadas para rastrear e medir o uso
              deste site, para que possamos continuar produzindo conteúdo
              atrativo. Esses cookies podem rastrear itens como o tempo que você
              passa no site ou as páginas visitadas, o que nos ajuda a entender
              como podemos melhorar o site para você.
            </li>
            <li>
              Periodicamente, testamos novos recursos e fazemos alterações
              subtis na maneira como o site se apresenta. Quando ainda estamos
              testando novos recursos, esses cookies podem ser usados para
              garantir que você receba uma experiência consistente enquanto
              estiver no site, enquanto entendemos quais otimizações os nossos
              usuários mais apreciam.
            </li>
            <li>
              À medida que vendemos produtos, é importante entendermos as
              estatísticas sobre quantos visitantes de nosso site realmente
              compram e, portanto, esse é o tipo de dados que esses cookies
              rastrearão. Isso é importante para você, pois significa que
              podemos fazer previsões de negócios com precisão que nos permitem
              analizar nossos custos de publicidade e produtos para garantir o
              melhor preço possível.
            </li>
          </ul>

          <h3>Mais informações</h3>
          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </p>

          <p class="mt-12 pt-6 border-t border-gray-200 text-sm opacity-70">
            Esta política é efetiva a partir de Outubro de 2020.
          </p>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Custom typography styles matching the project's elegant feel */
h1 {
  letter-spacing: -0.02em;
}

:deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

:deep(h3) {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 1.5rem; /* 24px */
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

:deep(ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

:deep(li) {
  margin-bottom: 0.5rem;
}

.prose :deep(a) {
  color: #b25e5e; /* terracotta-ish color if available, hardcoded typical value */
  text-decoration: underline;
  transition: opacity 0.2s;
}

.prose :deep(a:hover) {
  opacity: 0.8;
}
</style>
