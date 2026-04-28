export default function handler(req, res) {
  res.status(200).json({
    workflowApiVersion: "1.1",
    type: "REST",
    metaData: {
      icon: "https://via.placeholder.com/40",
      category: "message"
    },
    lang: {
      "en-US": {
        name: "Test Custom Activity",
        description: "Testing Custom Activity via Webhook"
      }
    },
    arguments: {
      execute: {
        url: "https://webhook.site/d9ce391e-0752-4d0c-9988-df1c975ab4db",
        verb: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          mobile: "{{Contact.Default.MobileNumber}}",
          name: "{{Contact.Default.FirstName}}"
        }
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
        height: 300,
        width: 400,
        url: "https://abhifit007.github.io/Test-Custom-Activity/index.html"
      }
    },
    schema: {
      arguments: {
        execute: {
          inArguments: [],
          outArguments: []
        }
      }
    }
  });
}
