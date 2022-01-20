import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-calculator-page',
  templateUrl: './model-calculator-page.component.html',
  styleUrls: ['./model-calculator-page.component.css'],
})
export class ModelCalculatorPageComponent implements OnInit {
  phase;
  phases;

  constructor() {}

  ngOnInit(): void {
    this.phase = {
      id: 54,
      title: 'Finding open ports',
      order: 3,
      type: 'training',
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

    this.phases = [
      {
        id: 157,
        title: 'Pre-game assessments',
        order: 1,
        type: 'questionnaire',
        questions: [
          {
            order: 0,
            text: 'What is your level of skill in zip and unzip files in CLI?',
            questionType: 'RFQ',
            choices: [
              {
                id: 302,
                text: 'High',
                correct: true,
                order: 0,
              },
              {
                id: 303,
                text: 'Medium',
                correct: true,
                order: 1,
              },
              {
                id: 304,
                text: 'Low',
                correct: false,
                order: 2,
              },
              {
                id: 305,
                text: 'None',
                correct: false,
                order: 3,
              },
            ],
            id: 252,
          },
          {
            order: 2,
            text: 'What is your level of skill in connection to the server securely?',
            questionType: 'RFQ',
            choices: [
              {
                id: 306,
                text: 'High',
                correct: true,
                order: 0,
              },
              {
                id: 307,
                text: 'Medium',
                correct: true,
                order: 1,
              },
              {
                id: 308,
                text: 'Low',
                correct: false,
                order: 2,
              },
              {
                id: 309,
                text: 'None',
                correct: false,
                order: 3,
              },
            ],
            id: 253,
          },
          {
            order: 6,
            text: 'What is your level of skill in opening a command line on a remote computer?',
            questionType: 'RFQ',
            choices: [
              {
                id: 310,
                text: 'High',
                correct: true,
                order: 0,
              },
              {
                id: 311,
                text: 'Medium',
                correct: true,
                order: 1,
              },
              {
                id: 312,
                text: 'Low',
                correct: false,
                order: 2,
              },
              {
                id: 313,
                text: 'None',
                correct: false,
                order: 3,
              },
            ],
            id: 254,
          },
          {
            order: 4,
            text: 'What is your level of skill in using basic Linux commands?',
            questionType: 'RFQ',
            choices: [
              {
                id: 314,
                text: 'High',
                correct: true,
                order: 0,
              },
              {
                id: 315,
                text: 'Medium',
                correct: true,
                order: 1,
              },
              {
                id: 316,
                text: 'Low',
                correct: false,
                order: 2,
              },
              {
                id: 317,
                text: 'None',
                correct: false,
                order: 3,
              },
            ],
            id: 255,
          },
          {
            order: 7,
            text: 'What is your level of skill in privilege escalation?',
            questionType: 'RFQ',
            choices: [
              {
                id: 318,
                text: 'High',
                correct: true,
                order: 0,
              },
              {
                id: 319,
                text: 'Medium',
                correct: true,
                order: 1,
              },
              {
                id: 320,
                text: 'Low',
                correct: false,
                order: 2,
              },
              {
                id: 321,
                text: 'None',
                correct: false,
                order: 3,
              },
            ],
            id: 256,
          },
          {
            order: 1,
            text: 'What is your level of skill in downloading and transferring files into the server?',
            questionType: 'RFQ',
            choices: [
              {
                id: 322,
                text: 'High',
                correct: true,
                order: 0,
              },
              {
                id: 323,
                text: 'Medium',
                correct: true,
                order: 1,
              },
              {
                id: 324,
                text: 'Low',
                correct: false,
                order: 2,
              },
              {
                id: 325,
                text: 'None',
                correct: false,
                order: 3,
              },
            ],
            id: 257,
          },
          {
            order: 3,
            text: 'What is your level of skill in looking for opened ports?',
            questionType: 'RFQ',
            choices: [
              {
                id: 326,
                text: 'High',
                correct: true,
                order: 0,
              },
              {
                id: 327,
                text: 'Medium',
                correct: true,
                order: 1,
              },
              {
                id: 328,
                text: 'Low',
                correct: false,
                order: 2,
              },
              {
                id: 329,
                text: 'None',
                correct: false,
                order: 3,
              },
            ],
            id: 258,
          },
          {
            order: 5,
            text: 'What is your level of skill in using WinSCP?',
            questionType: 'RFQ',
            choices: [
              {
                id: 330,
                text: 'High',
                correct: true,
                order: 0,
              },
              {
                id: 331,
                text: 'Medium',
                correct: true,
                order: 1,
              },
              {
                id: 332,
                text: 'Low',
                correct: false,
                order: 2,
              },
              {
                id: 333,
                text: 'None',
                correct: false,
                order: 3,
              },
            ],
            id: 259,
          },
        ],
        questionnaireType: 'ADAPTIVE',
        phaseRelations: [
          {
            id: 152,
            order: 0,
            questionIds: [252, 253],
            phaseId: 154,
            successRate: 50,
          },
          {
            id: 153,
            order: 1,
            questionIds: [254],
            phaseId: 155,
            successRate: 100,
          },
          {
            id: 154,
            order: 2,
            questionIds: [256, 255],
            phaseId: 156,
            successRate: 100,
          },
        ],
      },
      {
        id: 152,
        title: 'Info',
        order: 0,
        type: 'info',
        content:
          "# Demo Summary\n\nThe demo contains all types of levels to demonstrate the training capabilities of the KYPO Cyber Range Platform.\n\n**Note**: It is recommended to use the Chrome browser. In case you run into difficulties with submitting the flag, try to Log out and Log in again. \n\n| Level | Level Name | Level Type |\n|:------:|------| ------ |\n| 1. | Info | Info |\n| 2. | Finding Open Ports | Game |\n| 3. | Connecting via Telnet | Game |\n| 4. | Privilege Escalation | Game |\n| 5. | Test Example | Assessment |\n| 6. | Assessment Example | Assessment |\n\n## Info\n\nThe level contains this information page.\n\n## Finding open ports\n\nThe level provides information on how to connect to a sandbox. In general, there are two possible options. The first option is to use the platform'a GUI to connect to the machine via Spice console. The second option is to connect through SSH with a generated config file and keys.\n\nThis level's small challenge is to scan open ports.\n\n## Connecting Via Telnet\n\nThis level's challenge is to connect to the server machine without a password and discover the secret flag.\n\n## Privilege Escalation\n\nThis demo's bigger challenge is to gain root privileges and read a flag available only to a root user. Enjoy! \n\n## Test Example\n\nThe level contains a simple example of a test. Tests can be used, for example, for additional testing of students for grading purposes.\n\n## Assessment Example\n\nThe level contains a simple example of a test. For example, the tests can be used to verify the learning outcomes or for collecting feedback.\n",
      },
      {
        id: 153,
        title: 'Set up SSH access',
        order: 2,
        type: 'training',
        estimatedDuration: 0,
        allowedCommands: 0,
        allowedWrongAnswers: 0,
        tasks: [
          {
            id: 102,
            title: 'Set up SSH access',
            order: 0,
            content:
              'For accessing KYPO virtual machines using your local command-line tool, click on `Get SSH access` button to download ZIP file and then follow the instructions in the [documentation](https://docs.crp.kypo.muni.cz/user-guide-advanced/sandboxes/sandbox-access/#user-access). When you are ready to advance to the next phase, submit the answer provided by the organizer or click on `Solution` button. ',
            answer: 'startgame',
            solution: 'startgame',
            incorrectAnswerLimit: 100,
            modifySandbox: false,
            sandboxChangeExpectedDuration: 0,
          },
        ],
        decisionMatrix: [
          {
            id: 102,
            order: 0,
            questionnaireAnswered: 0.0,
            keywordUsed: 0.0,
            completedInTime: 0.0,
            solutionDisplayed: 0.0,
            wrongAnswers: 0.0,
          },
        ],
        relatedQuestions: [],
      },
      {
        id: 154,
        title: 'Finding open ports',
        order: 3,
        type: 'training',
        estimatedDuration: 10,
        allowedCommands: 0,
        allowedWrongAnswers: 10,
        tasks: [
          {
            id: 103,
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
            id: 104,
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
            id: 103,
            order: 0,
            questionnaireAnswered: 0.0,
            keywordUsed: 0.0,
            completedInTime: 0.0,
            solutionDisplayed: 0.0,
            wrongAnswers: 0.0,
          },
          {
            id: 104,
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
            id: 252,
          },
          {
            order: 2,
            text: 'What is your level of skill in connection to the server securely?',
            questionType: 'RFQ',
            choices: [],
            id: 253,
          },
        ],
      },
      {
        id: 155,
        title: 'Connecting via Telnet',
        order: 4,
        type: 'training',
        estimatedDuration: 10,
        allowedCommands: 10,
        allowedWrongAnswers: 10,
        tasks: [
          {
            id: 105,
            title: 'Connecting via Telnet',
            order: 0,
            content:
              "Now you have the port number and you would like to connect, but you don't have any credentials. Luckily you know that user **`alice`** has a weak password. You might be able to guess it. The flag is in alices home directory. There is a list of common passwords placed in your home directory for your convenience.\n\n",
            answer: 'Top_Secret_Flag',
            solution:
              '1. You know that **alice** has a weak password so you can try a dictionary attack. A list of common passwords is ready in your home directory. One of possible tools to make a password attack is **hydra**. A command to find the password is **`hydra -l alice -P passlist.txt telnet://server:2323`**. This will reveal alices password **`bacon`**.\n\n2. Now you can connect to the server by using **`telnet server 2323`**, entering username **`alice`** and her password **`bacon`**.\n\n3. To read the flag you can use **`cat flag.txt`**. The flag is **`Top_Secret_Flag`**.\n',
            incorrectAnswerLimit: 10,
            modifySandbox: false,
            sandboxChangeExpectedDuration: 0,
          },
          {
            id: 106,
            title: 'Connecting via Telnet',
            order: 1,
            content:
              "Now you have the port number and you would like to connect, but you don't have any credentials. Luckily you know that user **`alice`** has a weak password. You might be able to guess it. The flag is in alices home directory. There is a list of common passwords placed in your home directory for your convenience.\n\nCommon tools for password attacks are **hydra** and **medusa**. Consult their help commands or man pages to find appropriate options to perform the attack. You can use the list of common passwords stored in your home directory. Use **`ls`** to list files.\n\n",
            answer: 'Top_Secret_Flag',
            solution:
              '1. You know that **alice** has a weak password so you can try a dictionary attack. A list of common passwords is ready in your home directory. One of possible tools to make a password attack is **hydra**. A command to find the password is **`hydra -l alice -P passlist.txt telnet://server:2323`**. This will reveal alices password **`bacon`**.\n\n2. Now you can connect to the server by using **`telnet server 2323`**, entering username **`alice`** and her password **`bacon`**.\n\n3. To read the flag you can use **`cat flag.txt`**. The flag is **`Top_Secret_Flag`**.\n',
            incorrectAnswerLimit: 10,
            modifySandbox: false,
            sandboxChangeExpectedDuration: 0,
          },
          {
            id: 107,
            title: 'Connecting via Telnet',
            order: 2,
            content:
              "Now you have the port number and you would like to connect, but you don't have any credentials. Luckily you know that user **`alice`** has a weak password. You might be able to guess it. The flag is in alices home directory. There is a list of common passwords placed in your home directory for your convenience.\n\nCommon tools for password attacks are **hydra** and **medusa**. Consult their help commands or man pages to find appropriate options to perform the attack. You can use the list of common passwords stored in your home directory. Use **`ls`** to list files.\n\nThe command to connect using telnet is **`telnet <host> <port>`**, so in our case **`telnet server 2323`**. You will be prompted to enter an username and password.\n\n",
            answer: 'Top_Secret_Flag',
            solution:
              '1. You know that **alice** has a weak password so you can try a dictionary attack. A list of common passwords is ready in your home directory. One of possible tools to make a password attack is **hydra**. A command to find the password is **`hydra -l alice -P passlist.txt telnet://server:2323`**. This will reveal alices password **`bacon`**.\n\n2. Now you can connect to the server by using **`telnet server 2323`**, entering username **`alice`** and her password **`bacon`**.\n\n3. To read the flag you can use **`cat flag.txt`**. The flag is **`Top_Secret_Flag`**.\n',
            incorrectAnswerLimit: 10,
            modifySandbox: false,
            sandboxChangeExpectedDuration: 0,
          },
        ],
        decisionMatrix: [
          {
            id: 105,
            order: 0,
            questionnaireAnswered: 0.0,
            keywordUsed: 0.0,
            completedInTime: 0.0,
            solutionDisplayed: 0.0,
            wrongAnswers: 0.0,
          },
          {
            id: 106,
            order: 1,
            questionnaireAnswered: 0.0,
            keywordUsed: 0.0,
            completedInTime: 1.0,
            solutionDisplayed: 1.0,
            wrongAnswers: 0.0,
          },
          {
            id: 107,
            order: 2,
            questionnaireAnswered: 1.0,
            keywordUsed: 0.0,
            completedInTime: 0.0,
            solutionDisplayed: 0.0,
            wrongAnswers: 0.0,
          },
        ],
        relatedQuestions: [
          {
            order: 6,
            text: 'What is your level of skill in opening a command line on a remote computer?',
            questionType: 'RFQ',
            choices: [],
            id: 254,
          },
        ],
      },
      {
        id: 156,
        title: 'Privilege Escalation',
        order: 5,
        type: 'training',
        estimatedDuration: 13,
        allowedCommands: 10,
        allowedWrongAnswers: 10,
        tasks: [
          {
            id: 108,
            title: 'Privilege Escalation',
            order: 0,
            content:
              'Great, you managed to login to the server as **alice** but there is not much you can do as **alice**. Can you find a way to become **root**? The flag is in the root directory.\n\nOne of common privilege escalation attack vectors is badly configured **sudo**. To see what you can use sudo for, use the **`sudo --list`** command.',
            answer: 'Cant_Guess_This',
            solution:
              '1. You can see that the only command you can use sudo on is **`less /home/alice/flag.txt`**. There is not much to see in the flag, but you can run this as **root**. Is there a way to get a shell?\n\n2. There is, all you have to do is enter **`!sh`** while running the **`sudo less /home/alice/flag.txt`** to get a root shell.\n\n3. To get the flag, use **`cd`** to enter the root directory and **`cat flag.txt`** to read the flag. The flag is **`Cant_Guess_This`**.',
            incorrectAnswerLimit: 10,
            modifySandbox: false,
            sandboxChangeExpectedDuration: 0,
          },
          {
            id: 109,
            title: 'Privilege Escalation',
            order: 1,
            content:
              'Great, you managed to login to the server as **alice** but there is not much you can do as **alice**. Can you find a way to become **root**? The flag is in the root directory.\n\nOne of common privilege escalation attack vectors is badly configured **sudo**. To see what you can use sudo for, use the **`sudo --list`** command.\n\nYou have probably figured out that you can run **sudo** on a certain **less** command. To get a shell run **`sudo less /home/alice/flag.txt`**, enter the password. Type **`!sh`** to get a root shell.\n\n',
            answer: 'Cant_Guess_This',
            solution:
              '1. You can see that the only command you can use sudo on is **`less /home/alice/flag.txt`**. There is not much to see in the flag, but you can run this as **root**. Is there a way to get a shell?\n\n2. There is, all you have to do is enter **`!sh`** while running the **`sudo less /home/alice/flag.txt`** to get a root shell.\n\n3. To get the flag, use **`cd`** to enter the root directory and **`cat flag.txt`** to read the flag. The flag is **`Cant_Guess_This`**.',
            incorrectAnswerLimit: 10,
            modifySandbox: false,
            sandboxChangeExpectedDuration: 0,
          },
        ],
        decisionMatrix: [
          {
            id: 108,
            order: 0,
            questionnaireAnswered: 0.0,
            keywordUsed: 0.0,
            completedInTime: 0.0,
            solutionDisplayed: 0.0,
            wrongAnswers: 0.0,
          },
          {
            id: 109,
            order: 1,
            questionnaireAnswered: 0.0,
            keywordUsed: 0.0,
            completedInTime: 1.0,
            solutionDisplayed: 1.0,
            wrongAnswers: 0.0,
          },
          {
            id: 110,
            order: 2,
            questionnaireAnswered: 0.0,
            keywordUsed: 1.0,
            completedInTime: 1.0,
            solutionDisplayed: 0.0,
            wrongAnswers: 1.0,
          },
          {
            id: 111,
            order: 3,
            questionnaireAnswered: 0.0,
            keywordUsed: 0.0,
            completedInTime: 0.0,
            solutionDisplayed: 0.0,
            wrongAnswers: 0.0,
          },
        ],
        relatedQuestions: [
          {
            order: 7,
            text: 'What is your level of skill in privilege escalation?',
            questionType: 'RFQ',
            choices: [],
            id: 256,
          },
          {
            order: 4,
            text: 'What is your level of skill in using basic Linux commands?',
            questionType: 'RFQ',
            choices: [],
            id: 255,
          },
        ],
      },
      {
        id: 158,
        title: 'Questionnaire example',
        order: 6,
        type: 'questionnaire',
        questions: [
          {
            order: 4,
            text: 'How would you improve this demo?',
            questionType: 'FFQ',
            choices: [],
            id: 260,
          },
          {
            order: 0,
            text: 'How did you connect to the client?',
            questionType: 'MCQ',
            choices: [
              {
                id: 334,
                text: 'Graphical user interface of KYPO',
                correct: true,
                order: 0,
              },
              {
                id: 335,
                text: 'SSH',
                correct: true,
                order: 1,
              },
            ],
            id: 261,
          },
          {
            order: 1,
            text: 'Do you agree that Everything went smoothly?',
            questionType: 'RFQ',
            choices: [
              {
                id: 336,
                text: 'Very much',
                correct: true,
                order: 0,
              },
              {
                id: 337,
                text: 'A little bit',
                correct: true,
                order: 1,
              },
              {
                id: 338,
                text: 'Not really',
                correct: true,
                order: 2,
              },
              {
                id: 339,
                text: 'Not at all',
                correct: true,
                order: 3,
              },
            ],
            id: 262,
          },
          {
            order: 2,
            text: 'Do you agree that The User Interface is nice?',
            questionType: 'RFQ',
            choices: [
              {
                id: 340,
                text: 'Very much',
                correct: true,
                order: 0,
              },
              {
                id: 341,
                text: 'A little bit',
                correct: true,
                order: 1,
              },
              {
                id: 342,
                text: 'Not really',
                correct: true,
                order: 2,
              },
              {
                id: 343,
                text: 'Not at all',
                correct: true,
                order: 3,
              },
            ],
            id: 263,
          },
          {
            order: 3,
            text: 'Do you agree that The test was easy?',
            questionType: 'RFQ',
            choices: [
              {
                id: 344,
                text: 'Very much',
                correct: true,
                order: 0,
              },
              {
                id: 345,
                text: 'A little bit',
                correct: true,
                order: 1,
              },
              {
                id: 346,
                text: 'Not really',
                correct: true,
                order: 2,
              },
              {
                id: 347,
                text: 'Not at all',
                correct: true,
                order: 3,
              },
            ],
            id: 264,
          },
        ],
        questionnaireType: 'GENERAL',
        phaseRelations: [],
      },
    ];
  }
}
