export default function handler(req, res) {
  return res.status(200).json({
    workflowApiVersion: "1.1",
    type: "REST",
    metaData: {
      icon: "https://via.placeholder.com/40",
      category: "message"
    },
    lang: {
      "en-US": {
        name: "Test Activity",
        description: "Test"
      }
    },
    arguments: {
      execute: {
        url: "https://test-custom-activity-vercel.vercel.app/api/config",
        verb: "POST"
      }
    },
    configurationArguments: {
      applicationExtensionKey: "6ede0c69-f2d1-4058-9583-a3955f2dcc9f",
      publish: {
        url: "https://test-custom-activity-vercel.vercel.app/api/config"
      },
      validate: {
        url: "https://test-custom-activity-vercel.vercel.app/api/config"
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
