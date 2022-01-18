import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-calculator-page',
  templateUrl: './model-calculator-page.component.html',
  styleUrls: ['./model-calculator-page.component.css'],
})
export class ModelCalculatorPageComponent implements OnInit {
  phase;

  constructor() {}

  ngOnInit(): void {
    this.phase = {
      id: 54,
      title: 'Finding open ports',
      order: 3,
      phaseType: 'TRAINING',
      estimatedDuration: 10,
      allowedCommands: 0,
      allowedWrongAnswers: 10,
      tasks: [
        {
          id: 53,
          title: 'Finding open ports',
          order: 0,
          content:
            'Your goal is to get access to a **server**. You know that there is a **telnet** service running on the server but it is not running on the default port. Your first task is to find the **port** on which the telnet service is running. The flag is the port number.\n\nBelow are two options how to connect to the client from which you can connect to the server.\n\n## GUI access\n1. In the topology overview, click the button in the top-right corner of the graph, then **`Expand All`**, **`client`** and **`Generate console URL`**. After a few moments, **`Open link`** next to the **`Generate console URL`** should appear.\n\n2. Login using username **`kypo`** and password **`kypo`**.\n\n## SSH from local machine\n1. Use the **`Get SSH Access`** button to download **`ssh-access.zip`**.\n\n2. Extract the **`ssh-access.zip`** file to your **`~/.ssh/`** directory.\n\n    `$ unzip ssh-access.zip -d ~/.ssh/`\n\n3. Execute the extracted source script in the current shell using the **`source`** command with the path to the KYPO proxy SSH private key. The source script that will set the **`ssh`** command and the **KYPO proxy SSH private key**, which is available from instance operator.\n\n    `$ source ~/.ssh/pool-id-<pool_ID>-sandbox-id-<sbx_ID>-user-source.sh PATH_TO_KYPO_PROXY_PRIVATE_KEY`\n\n4. Connect to the client to **`kypo`** user. \n\n    `$ ssh kypo@client`',
          answer: '2323',
          solution:
            '1. Connect to the client using either of the options.\n\n2. Look for open ports using the command **`nmap server`**. You can see **ssh** running on port **22** and some other service running on port **2323**. This has to be the **telnet** service.\n\n3. Enter **`2323`** as the flag.',
          incorrectAnswerLimit: 10,
          modifySandbox: false,
          sandboxChangeExpectedDuration: 0,
        },
        {
          id: 54,
          title: 'Finding open ports',
          order: 1,
          content:
            'Your goal is to get access to a **server**. You know that there is a **telnet** service running on the server but it is not running on the default port. Your first task is to find the **port** on which the telnet service is running. The flag is the port number.\n\nBelow are two options how to connect to the client from which you can connect to the server.\n\n## GUI access\n1. In the topology overview, click the button in the top-right corner of the graph, then **`Expand All`**, **`client`** and **`Generate console URL`**. After a few moments, **`Open link`** next to the **`Generate console URL`** should appear.\n\n2. Login using username **`kypo`** and password **`kypo`**.\n\n## SSH from local machine\n1. Use the **`Get SSH Access`** button to download **`ssh-access.zip`**.\n\n2. Extract the **`ssh-access.zip`** file to your **`~/.ssh/`** directory.\n\n    `$ unzip ssh-access.zip -d ~/.ssh/`\n\n3. Execute the extracted source script in the current shell using the **`source`** command with the path to the KYPO proxy SSH private key. The source script that will set the **`ssh`** command and the **KYPO proxy SSH private key**, which is available from instance operator.\n\n    `$ source ~/.ssh/pool-id-<pool_ID>-sandbox-id-<sbx_ID>-user-source.sh PATH_TO_KYPO_PROXY_PRIVATE_KEY`\n\n4. Connect to the client to **`kypo`** user. \n\n    `$ ssh kypo@client`\n\nA common tool to find open ports is **nmap**. You can learn how to use nmap using **`nmap --help`** or by searching online.',
          answer: '2323',
          solution:
            '1. Connect to the client using either of the options.\n\n2. Look for open ports using the command **`nmap server`**. You can see **ssh** running on port **22** and some other service running on port **2323**. This has to be the **telnet** service.\n\n3. Enter **`2323`** as the flag.',
          incorrectAnswerLimit: 10,
          modifySandbox: false,
          sandboxChangeExpectedDuration: 0,
        },
      ],
      decisionMatrix: [
        {
          id: 53,
          order: 0,
          questionnaireAnswered: 0.0,
          keywordUsed: 0.0,
          completedInTime: 0.0,
          solutionDisplayed: 0.0,
          wrongAnswers: 0.0,
        },
        {
          id: 54,
          order: 1,
          questionnaireAnswered: 1.0,
          keywordUsed: 0.0,
          completedInTime: 0.0,
          solutionDisplayed: 0.0,
          wrongAnswers: 0.0,
        },
      ],
      relatedQuestions: [
        {
          order: 0,
          text: 'What is your level of skill in zip and unzip files in CLI?',
          questionType: 'RFQ',
          choices: [],
          id: 53,
        },
        {
          order: 2,
          text: 'What is your level of skill in connection to the server securely?',
          questionType: 'RFQ',
          choices: [],
          id: 52,
        },
      ],
    };
  }
}
