import localeAntd from 'antd/es/locale/ru_RU'

const messages = {
  'topBar.issuesHistory': 'История заданий',
  'topBar.projectManagement': 'Управление проектом',
  'topBar.typeToSearch': 'Издөө...',
  'topBar.findPages': 'Беттерди издөө...',
  'topBar.actions': 'Действия',
  'topBar.status': 'Статус',
  'topBar.profileMenu.hello': 'Салам',
  'topBar.profileMenu.billingPlan': 'Тарифный план',
  'topBar.profileMenu.role': 'Роль',
  'topBar.profileMenu.email': 'Емайл',
  'topBar.profileMenu.phone': 'Телефон',
  'topBar.profileMenu.editProfile': 'Профилди өзгөртүү',
  'topBar.profileMenu.newStory': 'Жаңы макала',
  'topBar.profileMenu.drafts': 'Черновиктер',
  'topBar.profileMenu.readingList': 'Окуу тизмеси',
  'topBar.profileMenu.switchTheme': 'Теманы которуу',
  'topBar.profileMenu.logout': 'Чыгуу',
  'author.profile.info.totalArticles': 'Жалпы макалалар',
  'author.profile.info.totalContribution': 'Жалпы салым',
  'author.profile.info.followers': 'Подписчиктер',
  'author.profile.info.upload': 'Жүктөө',
  'author.profile.info.editProfile': 'Профилди түзөтүү',
  'author.profile.form.title': 'Маалыматыңызды жаңыртыңыз',
  'author.profile.form.name': 'Аты',
  'author.profile.form.nameError': 'Атыңызды жазыңыз',
  'author.profile.form.surname': 'Фамилия',
  'author.profile.form.surnameError': 'Фамилияңызды жазыңыз',
  'author.profile.form.bio': 'Биографияңызды кошуңуз',
  'author.profile.form.save': 'Сактоо',
  'author.profile.articles.loadMore': 'Дагы жүктөө',
  'author.profile.articles.latestPublications': 'Акыркы басылмалар',
  'author.drafts.index.yourDrafts': 'Ваши черновики',
  'author.drafts.index.writeStory': 'Окуя жазыныз',
  'author.drafts.index.drafts': 'Черновики',
  'author.drafts.index.published': 'Жарыяланган',
  'author.drafts.list.empty': 'Бош',
  'author.drafts.list.edit': 'Өзгөртүү',
  'author.drafts.list.delete': 'Жок кылуу',
  'author.drafts.list.actions': 'Иш чаралар',
  'article.details.comments.leaveComment': 'Комментарий калтыруу',
  'article.details.comments.commentMessage': 'Комментарийиңизди териңиз ..',
  'article.details.comments.commentMessageError': 'Сураныч, комментарийиңизди бериңиз',
  'article.details.comments.comment': 'Комментарий',
  'article.details.comments.comments': 'Комментарийлер',
  'article.details.comments.loadMore': 'Көбүрөөк жүктөө',
  'article.details.comments.editComment': 'Жорумду түзөтүү',
  'article.details.comments.deleteComment': 'Жорумду жок кылуу',
  'article.details.comments.deleteTitle': 'Чын эле жок кыласызбы?',
  'article.details.comments.cancel': 'Жокко чыгаруу',
  'article.details.comments.delete': 'Жок кылуу',
  'article.details.comments.edit': 'Түзөтүү',
  'article.details.comments.reply': 'Жооп',
  'article.details.comments.replyMessage': 'Жообуңузду териңиз ..',
  'article.details.comments.replyMessageError': 'Сураныч, жообуңузду бериңиз',
  'article.details.comments.editReply': 'Жоопту түзөтүү',
  'article.details.comments.deleteReply': 'Жоопту жок кылуу',
  'service.about.index.aboutBilerman': 'Билерман жөнүндө',
  'service.about.contact.contactBilerman': 'Билерман командасы менен байланышуу',
  'service.about.contact.message': 'Суроолоруңуз болсо, биз менен байланышыңыз',
  'service.privacyPolicy.index.privacyPolicy': 'Билермандын купуялык эрежеси',
  'service.privacyPolicy.index.date': 'Натыйжалуу: Март 15, 2021!',
  'service.privacyPolicy.index.message1':
    'Билерманды колдонгонуңуз үчүн рахмат. Биздин максат - адамдардын дүйнө жөнүндө түшүнүгүн тереңдетүү жана маанилүү идеяларды жайылтуу',
  'service.privacyPolicy.index.message2':
    'This Privacy Policy explains how A Bilerman Corporation (“Bilerman,” “we,” or “us”)\n' +
    '            collects, uses, and discloses information about you. This Privacy Policy applies when\n' +
    '            you use our websites, mobile applications, and other online products and services that\n' +
    '            link to this Privacy Policy (collectively, our “Services”), contact our customer service\n' +
    '            team, engage with us on social media, or otherwise interact with us.',
  'service.privacyPolicy.index.message3':
    'We may change this Privacy Policy from time to time. If we make changes, we will notify\n' +
    '            you by revising the date at the top of this policy and, in some cases, we may provide\n' +
    '            you with additional notice (such as adding a statement to our website or providing you\n' +
    '            with a notification). We encourage you to review this Privacy Policy regularly to stay\n' +
    '            informed about our information practices and the choices available to you.',
  'service.terms.index.termsOfService': 'Билерман Тейлөө шарттары',
  'service.terms.index.message1':
    'These Terms of Service (“Terms”) apply to your access to and use of the websites, mobile\n' +
    '            applications and other online products and services (collectively, the “Services”)\n' +
    '            provided by A Bilerman Corporation (“Bilerman” or “we”). By clicking your consent (e.g.\n' +
    '            “Continue,” “Sign-in,” or “Sign-up,”) or by using our Services, you agree to these\n' +
    '            Terms, including the mandatory arbitration provision and class action waiver in the\n' +
    '            Resolving Disputes; Binding Arbitration Section.',
  'service.terms.index.message2':
    'Our Privacy Policy explains how we collect and use your information while our Rules\n' +
    '            outline your responsibilities when using our Services. By using our Services, you’re\n' +
    '            agreeing to be bound by these Terms and our Rules. Please see our Privacy Policy for\n' +
    '            information about how we collect, use, share and otherwise process information about\n' +
    '            you.',
  'service.terms.index.message3':
    'If you have any questions about these Terms or our Services, please contact us at\n' +
    '            bilermaninc@gmail.com.',
  'auth.404.index.404': 'Веб баракча табылган жок',
  'auth.404.index.description': 'Бул баракча эскирген, жок кылынган же таптакыр жок',
  'auth.404.index.goBack': 'Артка кайтуу',
  'auth.500.index.serverError': 'Сервер катасы',
  'auth.confirm.index.hello': 'Салам',
  'auth.confirm.index.thanks': 'Билерман менен каттоодон өткөнүңүз үчүн чоң рахмат!',
  'auth.confirm.index.emailVerified': 'Электрондук почта каттоо эсебиңиз текшерилди.',
  'auth.confirm.index.signInContinue': 'Улантуу үчүн кириңиз.',
  'auth.confirm.index.signIn': 'Кирүү',
  'auth.confirm.index.oops': 'Ой!',
  'auth.confirm.index.emailNotVerified': 'Электрондук почта дареги текшерилген жок.!',
  'auth.confirm.index.message':
    'Сураныч, эмне ката кеткенин билүү үчүн төмөнкү билдирүүнү караңыз.!',
  'auth.confirm.index.signUp': 'Улантуу үчүн',
  'auth.confirm.index.toContinue': 'катталыңыз',
  'auth.login.index.welcome': 'Кайрадан кош келдиңиз!',
  'auth.login.index.signIn': 'Аккаунтка кирүү',
  'auth.login.index.email': 'Электрондук почта',
  'auth.login.index.password': 'Сыр сөз',
  'auth.login.index.forgotPassword': 'Сыр сөздү унуттуңузбу?',
  'auth.login.index.dontHaveAccount': 'Аккаунтуңуз жокпу?',
  'auth.login.index.signUp': 'Катталуу',
  'auth.login.index.inputEmail': 'Электрондук почта дарегиңизди киргизиңиз',
  'auth.login.index.inputPassword': 'Сыр сөзүңүздү киргизиңиз',
  'auth.login.index.orSignInWithSocial': 'же соцтармактар аркылуу кирүү',
  'auth.register.feedback.thankYou': 'Билерман менен каттоодон өткөнүңүз үчүн чоң рахмат!',
  'auth.register.feedback.checkYourEmail':
    'Электрондук почтаңызды текшериңиз жана аккаунтуңузду жандыруу үчүн көрсөтмөлөрдү аткарыңыз.',
  'auth.register.feedback.resend':
    'Эгер сизге кат келбесе, ырастоочу электрондук почтаңызды кайра жөнөтүңүз.',
  'auth.register.feedback.resendButton': 'Кайра жөнөтүү',
  'auth.register.feedback.confirm': 'Буга чейин текшерилгенби?',
  'auth.register.form.info': 'Жана долбоорлоруңузга көбүрөөк убакыт бөлө баштаңыз.',
  'auth.register.form.createAccount': 'Жаңы аккаунт ачыңыз',
  'auth.register.form.firstName': 'Атыныз',
  'auth.register.form.lastName': 'Фамилияныз',
  'auth.register.form.email': 'Электрондук почта',
  'auth.register.form.password': 'Сыр сөз',
  'auth.register.form.passwordConfirm': 'Сыр сөздү ырастоо',
  'auth.register.form.signUp': 'Азыр катталуу',
  'auth.register.form.haveAccount': 'Аккаунтуңуз барбы?',
  'auth.register.form.inputFirstName': 'Атыңызды жазыңыз',
  'auth.register.form.inputLastName': 'Фамилияңызды жазыңыз',
  'auth.register.form.inputEmail': 'Электрондук почта дарегиңизди жазыңыз',
  'auth.register.form.createPassword': 'Сыр сөз териңиз',
  'auth.register.form.confirmPassword': 'Сыр сөздү ырастаңыз',
  'auth.password.forgot.feedback.thankYou': 'Рахмат!',
  'auth.password.forgot.feedback.instruction':
    'Сырсөзүңүздү калыбына келтирүү боюнча көрсөтмөлөр электрондук почтаңызга жөнөтүлдү.',
  'auth.password.forgot.feedback.instructionFollow':
    'Сырсөзүңүздү баштапкы абалга келтирүү үчүн, көрсөтмөлөрдү аткарыңыз.',
  'auth.password.forgot.feedback.toContinue': ' ',
  'auth.password.forgot.feedback.resetPassword': 'Сыр сөздү жаңылоо',
  'auth.password.forgot.feedback.resetMyPassword': 'Сыр сөздү жаңылоо',
  'auth.password.forgot.feedback.goToSignIn': 'Кирүү үчүн басыңыз',
  'article.details.relatedArticles.relatedPosts': 'Окшош билдирүүлөр',
  'article.details.profile.follow': 'Жазылуу',
  'article.editor.form.publishDraft': 'Опубликуйте свой черновик',
  'article.editor.form.preview': 'Макалаңызды алдын ала карап чыгуу',
  'article.editor.form.image': 'Сүрөтүңүздү тандаңыз',
  'article.editor.form.imageQuality':
    'Окурмандарга жагымдуу болуш үчүн, окуяңызда жогорку сапаттагы сүрөттү колдонуңуз',
  'article.editor.form.note': 'Эскертүү:',
  'article.editor.form.noteMessage':
    'Бул жердеги өзгөрүүлөр окуяңыздын өзү эмес, Билерман башкы бети сыяктуу коомдук жайларда кандайча пайда болушуна таасир этет',
  'article.editor.form.language': 'Мазмундун тили',
  'article.editor.form.tag': 'Тегдер',
  'article.editor.form.tagContent':
    '(5ке чейин) Тегдерди кошуңуз, ошондо окурмандар сиздин окуяңыз жөнүндө билишет',
  'article.editor.form.publish': 'Жарыялоо',
  'article.editor.form.addTag': 'Тег кошуңуз',
  'article.editor.form.title': 'Аталышы',
  'article.editor.form.subtitle': 'Подзаголовок',
  'article.editor.form.inputTitle': 'Сураныч, макалаңыздын атын жазыңыз',
  'article.editor.form.inputSubtitle': 'Сураныч, макалаңыздын атын жазыңыз',
  'article.editor.form.selectLanguage': 'Сураныч, макаланын тилин тандаңыз',
  'article.editor.form.isCoverVisible': 'Алдын ала көрүү сүрөтү деталдар барагында көрүнөт',
  'article.editor.form.privacy': 'Купуялык жөндөөлөрү',
  'article.editor.form.isPublic': 'Жалпыга ачык',
  'article.editor.form.isListed': 'Жалпыга ачык баракчаларда тизмеленген',
  'article.editor.index.yourTitle': 'Mакалаңыздын аталышы ..',
  'article.editor.index.yourStory': 'Tell your story ..',
  'pages.tag.index.tagged_in': 'TAGGED IN ',
  'pages.tag.index.related_tags': 'Related tags ',
}

export default {
  code: 'ky',
  locale: 'ky-KG',
  localeAntd,
  messages,
}
