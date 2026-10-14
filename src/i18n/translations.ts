export type Lang = 'pt' | 'en';

const translations = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, me chamo',
      subtitle:
        'Desenvolvedor full stack com foco em back-end. Construo aplicações web completas — da API em Java ou Node.js à interface em React e Angular.',
      cta: 'Ver Projetos',
      resume: 'Baixar Currículo',
    },
    about: {
      sectionLabel: 'Sobre Mim',
      title: 'Minha',
      titleHighlight: 'Trajetória',
      award: '1º lugar entre 83 projetos',
      awardProject: '— Moneta AI',
      bio1:
        'Sou <strong>Matheus Bach</strong>, Desenvolvedor Júnior apaixonado por transformar ideias em produto. Comecei no Colégio Cotemig, onde descobri a programação e decidi construir minha carreira na área.',
      bio2:
        'No terceiro ano, desenvolvi o <strong>Moneta AI</strong> — plataforma de controle financeiro com IA — que conquistou o primeiro lugar na disciplina Projeto Software, unindo visão de produto e desenvolvimento técnico para gerar resultado real.',
      stats: {
        projects: 'Projetos Concluídos',
        technologies: 'Tecnologias',
        years: 'Anos de estudo',
      },
      highlights: [
        {
          title: 'Aprendizado Contínuo',
          description: 'Sempre estudando novas tecnologias e aprimorando habilidades.',
        },
        {
          title: 'Foco em Resultados',
          description: 'Comprometido em entregar soluções que fazem a diferença.',
        },
        {
          title: 'Objetivos Claros',
          description: 'Determinado a crescer e contribuir no mercado de tecnologia.',
        },
      ],
    },
    skills: {
      sectionLabel: 'Habilidades',
      title: 'Minhas',
      titleHighlight: 'Habilidades',
      categories: {
        frontend: 'Front-end',
        backend: 'Back-end',
        database: 'Banco de Dados',
        tools: 'Ferramentas',
      },
    },
    projects: {
      sectionLabel: 'Meus Projetos',
      title: 'Trabalhos',
      titleHighlight: 'Recentes',
      inProgress: 'Em Andamento',
      freelancer: 'Freelancer',
      commits: 'commits',
      viewGithub: 'Ver mais no GitHub',
      descriptions: {
        MonetaAI:
          'Controlar gastos falha porque registrar dá trabalho. Construí uma plataforma onde o registro acontece por conversa no WhatsApp — texto, voz ou foto do comprovante — com categorização automática por IA.',
        PradaComercio:
          'A empresa não tinha catálogo online e apresentava produtos avulsos por mensagem. Desenvolvi uma landing page com catálogo organizado, que hoje funciona como link único de apresentação comercial.',
        BHTech:
          'Loja virtual completa construída sem frameworks, em HTML, CSS e JavaScript puro — projeto acadêmico focado em dominar os fundamentos antes das bibliotecas.',
        LeveMente:
          'Consultório de terapia que dependia só de indicação para captar pacientes. Criei uma landing page mobile-first com formulário de contato integrado ao Firebase, publicada em produção.',
        Neoflow:
          'Página de captação para empresa de automação com IA, estruturada para converter visitante em lead qualificado antes da conversa comercial.',
        BHCelulares:
          'Loja física de iPhone e Xiaomi em BH sem nenhuma vitrine online. Landing page para apresentar os produtos e centralizar o contato dos clientes em um só lugar.',
        Musique:
          'Plataforma de conexão entre músicos, usada como projeto para aprofundar Java e Angular na prática: backend Spring Boot em camadas com PostgreSQL.',
        PlanilhaFinanceira:
          'Planilha financeira web com categorização automática de gastos por IA — o usuário registra uma despesa em linguagem natural e a IA classifica e organiza os dados em tempo real, com persistência no Firebase.',
      },
    },
    testimonials: {
      sectionLabel: 'Depoimentos',
      title: 'O que dizem os',
      titleHighlight: 'clientes',
    },
    contact: {
      sectionLabel: 'Contato',
      title: 'Vamos',
      titleHighlight: 'Conversar',
      titleSuffix: '?',
      description:
        'Estou disponível para projetos freelancers, oportunidades de emprego ou apenas para trocar uma ideia sobre tecnologia. Não hesite em entrar em contato!',
      whatsapp: 'Chamar no WhatsApp',
      replyTime: 'Respondo em até 24h em dias úteis.',
      form: {
        name: 'Nome',
        namePlaceholder: 'Seu nome completo',
        email: 'E-mail',
        emailPlaceholder: 'seu.email@exemplo.com',
        message: 'Mensagem',
        messagePlaceholder: 'Escreva sua mensagem aqui...',
        submit: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
        error: 'Erro ao enviar mensagem. Por favor, tente novamente.',
      },
    },
    footer: {
      rights: 'Todos os direitos reservados',
      scrollTop: 'Voltar ao topo',
      nav: {
        home: 'Home',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        contact: 'Contato',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, my name is",
      subtitle:
        'Full stack developer focused on back-end. I build complete web applications — from Java or Node.js APIs to React and Angular interfaces.',
      cta: 'View Projects',
      resume: 'Download Resume',
    },
    about: {
      sectionLabel: 'About Me',
      title: 'My',
      titleHighlight: 'Journey',
      award: '1st place among 83 projects',
      awardProject: '— Moneta AI',
      bio1:
        "I'm <strong>Matheus Bach</strong>, a Junior Developer passionate about turning ideas into products. I started at Colégio Cotemig, where I discovered programming and decided to build my career in tech.",
      bio2:
        'In my third year, I developed <strong>Moneta AI</strong> — an AI-powered financial control platform — which won first place in the Software Project course, combining product vision and technical development to deliver real results.',
      stats: {
        projects: 'Completed Projects',
        technologies: 'Technologies',
        years: 'Years of study',
      },
      highlights: [
        {
          title: 'Continuous Learning',
          description: 'Always studying new technologies and improving skills.',
        },
        {
          title: 'Results-Driven',
          description: 'Committed to delivering solutions that make a difference.',
        },
        {
          title: 'Clear Goals',
          description: 'Determined to grow and contribute to the tech market.',
        },
      ],
    },
    skills: {
      sectionLabel: 'Skills',
      title: 'My',
      titleHighlight: 'Skills',
      categories: {
        frontend: 'Front-end',
        backend: 'Back-end',
        database: 'Databases',
        tools: 'Tools',
      },
    },
    projects: {
      sectionLabel: 'My Projects',
      title: 'Recent',
      titleHighlight: 'Work',
      inProgress: 'In Progress',
      freelancer: 'Freelancer',
      commits: 'commits',
      viewGithub: 'See more on GitHub',
      descriptions: {
        MonetaAI:
          'Expense tracking fails because logging is tedious. I built a platform where recording happens through WhatsApp conversation — text, voice, or receipt photo — with automatic AI categorization.',
        PradaComercio:
          "The company had no online catalog and shared products individually via message. I developed a landing page with an organized catalog that now serves as their single commercial presentation link.",
        BHTech:
          'A complete online store built without frameworks, using pure HTML, CSS, and JavaScript — an academic project focused on mastering the fundamentals before libraries.',
        LeveMente:
          'A therapy practice that relied solely on referrals to attract patients. I created a mobile-first landing page with a Firebase-integrated contact form, deployed to production.',
        Neoflow:
          'A lead capture page for an AI automation company, structured to convert visitors into qualified leads before the sales conversation.',
        BHCelulares:
          'A physical iPhone and Xiaomi store in BH with no online presence. A landing page to showcase products and centralize customer contact in one place.',
        Musique:
          'A musician connection platform, used as a project to deepen Java and Angular skills in practice: layered Spring Boot backend with PostgreSQL.',
        PlanilhaFinanceira:
          'Web financial spreadsheet with AI-powered expense categorization — the user logs an expense in natural language and the AI classifies and organizes the data in real time, persisted on Firebase.',
      },
    },
    testimonials: {
      sectionLabel: 'Testimonials',
      title: 'What',
      titleHighlight: 'clients say',
    },
    contact: {
      sectionLabel: 'Contact',
      title: "Let's",
      titleHighlight: 'Talk',
      titleSuffix: '!',
      description:
        "I'm available for freelance projects, job opportunities, or just to chat about technology. Feel free to reach out!",
      whatsapp: 'Message on WhatsApp',
      replyTime: 'I reply within 24h on business days.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        message: 'Message',
        messagePlaceholder: 'Write your message here...',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully! I will get back to you soon.',
        error: 'Error sending message. Please try again.',
      },
    },
    footer: {
      rights: 'All rights reserved',
      scrollTop: 'Back to top',
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
    },
  },
} as const;

export type Translations = typeof translations;
export default translations;
