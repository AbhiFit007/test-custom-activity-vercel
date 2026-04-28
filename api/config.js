export default function handler(req, res) {
  res.status(200).json({
    workflowApiVersion: "1.1",
    metaData: {
      icon: "https://via.placeholder.com/40",
      category: "custom"
    },
    type: "REST",
    lang: {
      "en-US": {
        name: "Test Activity",
        description: "Test"
      }
    },
    arguments: {
      execute: {
        url: "https://webhook.site/d9ce391e-0752-4d0c-9988-df1c975ab4db",
        verb: "POST"
      }
    },
    configurationArguments: {
      applicationExtensionKey: "8c2ead8b-9584-4e66-99d1-2afe4d2a827e",
      validate: {
        url: "https://webhook.site/d9ce391e-0752-4d0c-9988-df1c975ab4db",
        verb: "POST"
      },
      publish: {
        url: "https://webhook.site/d9ce391e-0752-4d0c-9988-df1c975ab4db",
        verb: "POST"
      }
    },
    userInterfaces: {
      configModal: {
        height: 200,
        width: 300,
        url: "https://example.com"
      }
    }
  });
}
