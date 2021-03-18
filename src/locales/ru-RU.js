import localeAntd from 'antd/es/locale/ru_RU'

const messages = {
  'topBar.issuesHistory': 'История заданий',
  'topBar.projectManagement': 'Управление проектом',
  'topBar.typeToSearch': 'Поиск...',
  'topBar.findPages': 'Поиск страниц...',
  'topBar.actions': 'Действия',
  'topBar.status': 'Статус',
  'topBar.profileMenu.hello': 'Привет',
  'topBar.profileMenu.billingPlan': 'Тарифный план',
  'topBar.profileMenu.role': 'Роль',
  'topBar.profileMenu.email': 'Емайл',
  'topBar.profileMenu.phone': 'Телефон',
  'topBar.profileMenu.editProfile': 'Редактировать профиль',
  'topBar.profileMenu.logout': 'Выйти',
  'author.profile.info.totalArticles': 'Всего статей',
  'author.profile.info.totalContribution': 'Общий вклад',
  'author.profile.info.followers': 'Подписчики',
  'author.profile.articles.loadMore': 'Загрузить больше',
  'author.profile.articles.latestPublications': 'Последние публикации',
  'author.drafts.index.yourDrafts': 'Ваши черновики',
  'author.drafts.index.writeStory': 'Напишите историю',
  'author.drafts.index.drafts': 'Черновики',
  'author.drafts.index.published': 'Опубликовано',
  'author.drafts.list.empty': 'Пустой',
  'author.drafts.list.edit': 'Редактировать',
  'author.drafts.list.delete': 'Удалить',
  'author.drafts.list.actions': 'Действия',
  'article.details.comment.leaveComment': 'Оставить комментарий',
  'service.about.index.aboutBilerman': 'О Билерман',
  'service.about.contact.contactBilerman': 'Связаться с командой Билерман',
  'service.about.contact.message': 'Пожалуйста, свяжитесь с нами, если у вас есть какие-нибудь вопросы.',
  'service.privacyPolicy.index.privacyPolicy': 'Правило конфиденциальности Билерман',
  'service.privacyPolicy.index.date': 'Действующий: Март 15, 2021!',
  'service.privacyPolicy.index.message1': 'Билерман колдонгонуңуз үчүн рахмат. Биздин милдет -' +
    ' адамдардын дүйнө жөнүндө түшүнүгүн тереңдетүү жана маанилүү идеяларды жайылтуу',
  'service.privacyPolicy.index.message2':'This Privacy Policy explains how A Bilerman Corporation (“Bilerman,” “we,” or “us”)\n' +
    '            collects, uses, and discloses information about you. This Privacy Policy applies when\n' +
    '            you use our websites, mobile applications, and other online products and services that\n' +
    '            link to this Privacy Policy (collectively, our “Services”), contact our customer service\n' +
    '            team, engage with us on social media, or otherwise interact with us.',
  'service.privacyPolicy.index.message3': 'We may change this Privacy Policy from time to time. If we make changes, we will notify\n' +
    '            you by revising the date at the top of this policy and, in some cases, we may provide\n' +
    '            you with additional notice (such as adding a statement to our website or providing you\n' +
    '            with a notification). We encourage you to review this Privacy Policy regularly to stay\n' +
    '            informed about our information practices and the choices available to you.',
  'service.terms.index.termsOfService': 'Условия использования Билерман',
  'service.terms.index.message1': 'These Terms of Service (“Terms”) apply to your access to and use of the websites, mobile\n' +
    '            applications and other online products and services (collectively, the “Services”)\n' +
    '            provided by A Bilerman Corporation (“Bilerman” or “we”). By clicking your consent (e.g.\n' +
    '            “Continue,” “Sign-in,” or “Sign-up,”) or by using our Services, you agree to these\n' +
    '            Terms, including the mandatory arbitration provision and class action waiver in the\n' +
    '            Resolving Disputes; Binding Arbitration Section.',
  'service.terms.index.message2': 'Our Privacy Policy explains how we collect and use your information while our Rules\n' +
    '            outline your responsibilities when using our Services. By using our Services, you’re\n' +
    '            agreeing to be bound by these Terms and our Rules. Please see our Privacy Policy for\n' +
    '            information about how we collect, use, share and otherwise process information about\n' +
    '            you.',
  'service.terms.index.message3': 'If you have any questions about these Terms or our Services, please contact us at\n' +
    '            bilermaninc@gmail.com.',
  'auth.404.index.404': 'Страница не найдена',
  'auth.404.index.description': 'Эта страница устарела, удалена или вообще не существует',
  'auth.404.index.goBack': 'Вернуться  назад',
  'auth.500.index.serverError': 'Ошибка сервера',
  'auth.confirm.index.hello': 'Привет',
  'auth.confirm.index.thanks': 'Спасибо за регистрацию в Билерман!',
  'auth.confirm.index.emailVerified': 'Ваша учетная запись электронной почты подтверждена.',
  'auth.confirm.index.signInContinue': 'Пожалуйста, войдите, чтобы продолжить.',
  'auth.confirm.index.signIn': 'Войти',
  'auth.confirm.index.oops': 'Ой!',
  'auth.confirm.index.emailNotVerified': 'Электронный адрес не подтвержден.!',
  'auth.confirm.index.message': 'Пожалуйста, просмотрите сообщение ниже, чтобы узнать, что пошло не так.!',
  'auth.confirm.index.signUp': 'зарегистрируйтесь',
  'auth.confirm.index.toContinue': 'чтобы продолжить.',
  'auth.login.index.welcome': 'Добро пожаловать в',
  'auth.login.index.signIn': 'Войдите в свой аккаунт',
  'auth.login.index.email': 'Электронное письмо',
  'auth.login.index.password': 'Пароль',
  'auth.login.index.forgotPassword': 'Забыл пароль?',
  'auth.login.index.dontHaveAccount': 'Нет учетной записи?',
  'auth.login.index.signUp': 'Зарегистрироваться',
  'auth.login.index.inputEmail': 'Пожалуйста, введите свой адрес электронной почты',
  'auth.login.index.inputPassword': 'Пожалуйста, введите свой пароль',
}

export default {
  code: 'ru',
  locale: 'ru-RU',
  localeAntd,
  messages,
}
