interface AppConfig {
  name: string;
  github: {
    title: string;
    url: string;
  };
  author: {
    name: string;
    url: string;
  };
}

export const appConfig: AppConfig = {
  name: "Sample App",
  github: {
    title: "DOTFI Starter",
    url: "",
  },
  author: {
    name: "dellwatson",
    url: "https://github.com/dellwatson/",
  },
};
