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
      applicationExtensionKey: "6ede0c69-f2d1-4058-9583-a3955f2dcc9f",
      validate: {
        url: "https://webhook.site/d9ce391e-0752-4d0c-9988-df1c975ab4db",
        verb: "POST"
      },
      publish: {schema: {
  arguments: {
    execute: {
      inArguments: [
        { mobile: "{{Contact.Default.MobileNumber}}" },
        { name: "{{Contact.Default.FirstName}}" }
      ],
      outArguments: []
    }
  }
}
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
    
  });
}
