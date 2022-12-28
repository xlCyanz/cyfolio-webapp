export default {
  locale: "en",
  messages: {
    alertChangingLanguage: {
      title: "Language",
      message: "Select the language you want to change to",
      inputPlaceholder: "Select an available language",
      buttonAccept: "Switch language",
      buttonCancel: "Cancel",
      inputOptions: {
        en: "English (Ingles)",
        es: "Spanish (Español)",
      },
    },
    alertErrorFetch: {
      title: "Error trying to request the data",
      message: "An error occurred while fetching the data",
      buttonAccept: "Accept",
    },
    navigation: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    homepage: {
      title: "Hello, my name is",
      subtitle: "I'm a",
      buttonAboutMe: "More about me",
    },
    aboutpage: {
      title: "About me",
      subtitle: "Hey! It's {name} and I'm a {job} ",
      dataPersonal: {
        birthday: "Birthday",
        age: "Age",
        email: "Email",
        sendEmail: "Send Message",
        telephone: "Telephone",
      },
      buttonDownloadCV: "Download Curriculum Vitae",
      timelineEducation: "Education",
      timelineExperience: "Experience",
    },
    projectspage: {
      title: "Projects",
      subtitle: "My last projects",
      noprojects: "There are no projects available",
      buttonReadMore: "Read more",
      buttonLoadMore: "Load more",
      dynamicPage: {
        title: "About project",
        buttonRepository: "Visit repository",
        buttonOnline: "Visit online application",
      },
    },
    contactpage: {
      title: "Contact me",
      subtitle: "Send me an Email",
      description: "You dont like forms? Send me a {email}.",
      button: "Send Message",
      alerts: {
        emptyTitle: "Warning!",
        empty: "Please fill out all fields.",
        succesTitle: "Email Sent!",
        success: "Message was sent successfully.",
        errorTitle: "Error!",
        error: "An error occurred while trying to send the message.",
      },
      form: {
        inputName: "Name",
        inputEmail: "Email",
        inputSubject: "Subject",
        inputMessage: "Message",
      },
    },
  },
};
