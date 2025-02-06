module.exports = function () {
    return {
        instances: {
            trainingDefinitionDTO: {
                "id": 52,
                "description": "The demo contains all types of phases to demonstrate the capabilities of the KYPO Cyber Range Platform in adaptive training.",
                "title": "Uploaded KYPO Cyber Range Training Platform - Adaptive Demo Content",
                "prerequisites": ["Note 1", "Note 2"],
                "outcomes": ["Outcome 1", "Outcome 2"],
                "state": "UNRELEASED",
                "phases": [{
                    "id": 52,
                    "title": "Info",
                    "order": 0,
                    "phase_type": "INFO",
                    "content": "# Demo Summary\n\nThe demo contains all types of levels to demonstrate the training capabilities of the KYPO Cyber Range Platform.\n\n**Note**: It is recommended to use the Chrome browser. In case you run into difficulties with submitting the flag, try to Log out and Log in again. \n\n| Level | Level Name | Level Type |\n|:------:|------| ------ |\n| 1. | Info | Info |\n| 2. | Finding Open Ports | Game |\n| 3. | Connecting via Telnet | Game |\n| 4. | Privilege Escalation | Game |\n| 5. | Test Example | Assessment |\n| 6. | Assessment Example | Assessment |\n\n## Info\n\nThe level contains this information page.\n\n## Finding open ports\n\nThe level provides information on how to connect to a sandbox. In general, there are two possible options. The first option is to use the platform'a GUI to connect to the machine via Spice console. The second option is to connect through SSH with a generated config file and keys.\n\nThis level's small challenge is to scan open ports.\n\n## Connecting Via Telnet\n\nThis level's challenge is to connect to the server machine without a password and discover the secret flag.\n\n## Privilege Escalation\n\nThis demo's bigger challenge is to gain root privileges and read a flag available only to a root user. Enjoy! \n\n## Test Example\n\nThe level contains a simple example of a test. Tests can be used, for example, for additional testing of students for grading purposes.\n\n## Assessment Example\n\nThe level contains a simple example of a test. For example, the tests can be used to verify the learning outcomes or for collecting feedback.\n"
                }, {
                    "id": 57,
                    "title": "Pre-game assessment",
                    "order": 1,
                    "phase_type": "QUESTIONNAIRE",
                    "questions": [{
                        "order": 0,
                        "text": "What is your level of skill in zip and unzip files in CLI?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 1,
                            "text": "High",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 2,
                            "text": "Medium",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 3,
                            "text": "Low",
                            "correct": false,
                            "order": 2
                        }, {
                            "id": 4,
                            "text": "None",
                            "correct": false,
                            "order": 3
                        }],
                        "id": 1
                    }, {
                        "order": 1,
                        "text": "What is your level of skill in downloading and transferring files into the server?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 5,
                            "text": "High",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 6,
                            "text": "Medium",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 7,
                            "text": "Low",
                            "correct": false,
                            "order": 2
                        }, {
                            "id": 8,
                            "text": "None",
                            "correct": false,
                            "order": 3
                        }],
                        "id": 2
                    }, {
                        "order": 2,
                        "text": "What is your level of skill in connection to the server securely?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 9,
                            "text": "High",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 10,
                            "text": "Medium",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 11,
                            "text": "Low",
                            "correct": false,
                            "order": 2
                        }, {
                            "id": 12,
                            "text": "None",
                            "correct": false,
                            "order": 3
                        }],
                        "id": 3
                    }, {
                        "order": 3,
                        "text": "What is your level of skill in looking for opened ports?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 13,
                            "text": "High",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 14,
                            "text": "Medium",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 15,
                            "text": "Low",
                            "correct": false,
                            "order": 2
                        }, {
                            "id": 16,
                            "text": "None",
                            "correct": false,
                            "order": 3
                        }],
                        "id": 4
                    }, {
                        "order": 4,
                        "text": "What is your level of skill in using basic Linux commands?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 17,
                            "text": "High",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 18,
                            "text": "Medium",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 19,
                            "text": "Low",
                            "correct": false,
                            "order": 2
                        }, {
                            "id": 20,
                            "text": "None",
                            "correct": false,
                            "order": 3
                        }],
                        "id": 5
                    }, {
                        "order": 5,
                        "text": "What is your level of skill in using WinSCP?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 21,
                            "text": "High",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 22,
                            "text": "Medium",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 23,
                            "text": "Low",
                            "correct": false,
                            "order": 2
                        }, {
                            "id": 24,
                            "text": "None",
                            "correct": false,
                            "order": 3
                        }],
                        "id": 6
                    }, {
                        "order": 6,
                        "text": "What is your level of skill in opening a command line on a remote computer?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 25,
                            "text": "High",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 26,
                            "text": "Medium",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 27,
                            "text": "Low",
                            "correct": false,
                            "order": 2
                        }, {
                            "id": 28,
                            "text": "None",
                            "correct": false,
                            "order": 3
                        }],
                        "id": 7
                    }, {
                        "order": 7,
                        "text": "What is your level of skill in privilege escalation?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 29,
                            "text": "High",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 30,
                            "text": "Medium",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 31,
                            "text": "Low",
                            "correct": false,
                            "order": 2
                        }, {
                            "id": 32,
                            "text": "None",
                            "correct": false,
                            "order": 3
                        }],
                        "id": 8
                    }],
                    "questionnaire_type": "ADAPTIVE",
                    "phase_relations": [{
                        "id": 1,
                        "order": 0,
                        "question_ids": [1, 3],
                        "phase_id": 54,
                        "success_rate": 50
                    }, {
                        "id": 2,
                        "order": 1,
                        "question_ids": [7],
                        "phase_id": 55,
                        "success_rate": 100
                    }, {
                        "id": 3,
                        "order": 2,
                        "question_ids": [5, 8],
                        "phase_id": 56,
                        "success_rate": 100
                    }]
                }, {
                    "id": 53,
                    "title": "Set up SSH access",
                    "order": 2,
                    "phase_type": "TRAINING",
                    "estimated_duration": 0,
                    "allowed_commands": 0,
                    "allowed_wrong_answers": 0,
                    "tasks": [{
                        "id": 1,
                        "title": "Set up SSH access",
                        "order": 0,
                        "content": "For accessing KYPO virtual machines using your local command-line tool, click on `Get SSH access` button to download ZIP file and then follow the instructions in the [documentation](https://docs.crp.kypo.muni.cz/user-guide-advanced/sandboxes/sandbox-access/#user-access). When you are ready to advance to the next phase-edit, submit the answer provided by the organizer or click on `Solution` button. ",
                        "answer": "startgame",
                        "solution": "startgame",
                        "incorrect_answer_limit": 100,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }],
                    "decision_matrix": [{
                        "id": 52,
                        "order": 0,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }],
                    "related_questions": []
                }, {
                    "id": 54,
                    "title": "Finding open ports",
                    "order": 3,
                    "phase_type": "TRAINING",
                    "estimated_duration": 10,
                    "allowed_commands": 0,
                    "allowed_wrong_answers": 10,
                    "tasks": [{
                        "id": 2,
                        "title": "Finding open ports",
                        "order": 0,
                        "content": "Your goal is to get access to a **server**. You know that there is a **telnet** service running on the server but it is not running on the default port. Your first task is to find the **port** on which the telnet service is running. The flag is the port number.\n\nBelow are two options how to connect to the client from which you can connect to the server.\n\n## GUI access\n1. In the topology overview, click the button in the top-right corner of the graph, then **`Expand All`**, **`client`** and **`Generate console URL`**. After a few moments, **`Open link`** next to the **`Generate console URL`** should appear.\n\n2. Login using username **`kypo`** and password **`kypo`**.\n\n## SSH from local machine\n1. Use the **`Get SSH Access`** button to download **`ssh-access.zip`**.\n\n2. Extract the **`ssh-access.zip`** file to your **`~/.ssh/`** directory.\n\n    `$ unzip ssh-access.zip -d ~/.ssh/`\n\n3. Execute the extracted source script in the current shell using the **`source`** command with the path to the KYPO proxy SSH private key. The source script that will set the **`ssh`** command and the **KYPO proxy SSH private key**, which is available from instance operator.\n\n    `$ source ~/.ssh/pool-id-<pool_ID>-sandbox-id-<sbx_ID>-user-source.sh PATH_TO_KYPO_PROXY_PRIVATE_KEY`\n\n4. Connect to the client to **`kypo`** user. \n\n    `$ ssh kypo@client`",
                        "answer": "2323",
                        "solution": "1. Connect to the client using either of the options.\n\n2. Look for open ports using the command **`nmap server`**. You can see **ssh** running on port **22** and some other service running on port **2323**. This has to be the **telnet** service.\n\n3. Enter **`2323`** as the flag.",
                        "incorrect_answer_limit": 10,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 3,
                        "title": "Finding open ports",
                        "order": 1,
                        "content": "Your goal is to get access to a **server**. You know that there is a **telnet** service running on the server but it is not running on the default port. Your first task is to find the **port** on which the telnet service is running. The flag is the port number.\n\nBelow are two options how to connect to the client from which you can connect to the server.\n\n## GUI access\n1. In the topology overview, click the button in the top-right corner of the graph, then **`Expand All`**, **`client`** and **`Generate console URL`**. After a few moments, **`Open link`** next to the **`Generate console URL`** should appear.\n\n2. Login using username **`kypo`** and password **`kypo`**.\n\n## SSH from local machine\n1. Use the **`Get SSH Access`** button to download **`ssh-access.zip`**.\n\n2. Extract the **`ssh-access.zip`** file to your **`~/.ssh/`** directory.\n\n    `$ unzip ssh-access.zip -d ~/.ssh/`\n\n3. Execute the extracted source script in the current shell using the **`source`** command with the path to the KYPO proxy SSH private key. The source script that will set the **`ssh`** command and the **KYPO proxy SSH private key**, which is available from instance operator.\n\n    `$ source ~/.ssh/pool-id-<pool_ID>-sandbox-id-<sbx_ID>-user-source.sh PATH_TO_KYPO_PROXY_PRIVATE_KEY`\n\n4. Connect to the client to **`kypo`** user. \n\n    `$ ssh kypo@client`\n\nA common tool to find open ports is **nmap**. You can learn how to use nmap using **`nmap --help`** or by searching online.",
                        "answer": "2323",
                        "solution": "1. Connect to the client using either of the options.\n\n2. Look for open ports using the command **`nmap server`**. You can see **ssh** running on port **22** and some other service running on port **2323**. This has to be the **telnet** service.\n\n3. Enter **`2323`** as the flag.",
                        "incorrect_answer_limit": 10,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }],
                    "decision_matrix": [{
                        "id": 53,
                        "order": 0,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 54,
                        "order": 1,
                        "questionnaire_answered": 1.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }],
                    "related_questions": [{
                        "order": 0,
                        "text": "What is your level of skill in zip and unzip files in CLI?",
                        "question_type": "RFQ",
                        "choices": [],
                        "id": 1
                    }, {
                        "order": 2,
                        "text": "What is your level of skill in connection to the server securely?",
                        "question_type": "RFQ",
                        "choices": [],
                        "id": 3
                    }]
                }, {
                    "id": 55,
                    "title": "Connecting via Telnet",
                    "order": 4,
                    "phase_type": "TRAINING",
                    "estimated_duration": 10,
                    "allowed_commands": 10,
                    "allowed_wrong_answers": 10,
                    "tasks": [{
                        "id": 4,
                        "title": "Connecting via Telnet",
                        "order": 0,
                        "content": "Now you have the port number and you would like to connect, but you don't have any credentials. Luckily you know that user **`alice`** has a weak password. You might be able to guess it. The flag is in alices home directory. There is a list of common passwords placed in your home directory for your convenience.\n\n",
                        "answer": "Top_Secret_Flag",
                        "solution": "1. You know that **alice** has a weak password so you can try a dictionary attack. A list of common passwords is ready in your home directory. One of possible tools to make a password attack is **hydra**. A command to find the password is **`hydra -l alice -P passlist.txt telnet://server:2323`**. This will reveal alices password **`bacon`**.\n\n2. Now you can connect to the server by using **`telnet server 2323`**, entering username **`alice`** and her password **`bacon`**.\n\n3. To read the flag you can use **`cat flag.txt`**. The flag is **`Top_Secret_Flag`**.\n",
                        "incorrect_answer_limit": 10,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 5,
                        "title": "Connecting via Telnet",
                        "order": 1,
                        "content": "Now you have the port number and you would like to connect, but you don't have any credentials. Luckily you know that user **`alice`** has a weak password. You might be able to guess it. The flag is in alices home directory. There is a list of common passwords placed in your home directory for your convenience.\n\nCommon tools for password attacks are **hydra** and **medusa**. Consult their help commands or man pages to find appropriate options to perform the attack. You can use the list of common passwords stored in your home directory. Use **`ls`** to list files.\n\n",
                        "answer": "Top_Secret_Flag",
                        "solution": "1. You know that **alice** has a weak password so you can try a dictionary attack. A list of common passwords is ready in your home directory. One of possible tools to make a password attack is **hydra**. A command to find the password is **`hydra -l alice -P passlist.txt telnet://server:2323`**. This will reveal alices password **`bacon`**.\n\n2. Now you can connect to the server by using **`telnet server 2323`**, entering username **`alice`** and her password **`bacon`**.\n\n3. To read the flag you can use **`cat flag.txt`**. The flag is **`Top_Secret_Flag`**.\n",
                        "incorrect_answer_limit": 10,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 6,
                        "title": "Connecting via Telnet",
                        "order": 2,
                        "content": "Now you have the port number and you would like to connect, but you don't have any credentials. Luckily you know that user **`alice`** has a weak password. You might be able to guess it. The flag is in alices home directory. There is a list of common passwords placed in your home directory for your convenience.\n\nCommon tools for password attacks are **hydra** and **medusa**. Consult their help commands or man pages to find appropriate options to perform the attack. You can use the list of common passwords stored in your home directory. Use **`ls`** to list files.\n\nThe command to connect using telnet is **`telnet <host> <port>`**, so in our case **`telnet server 2323`**. You will be prompted to enter an username and password.\n\n",
                        "answer": "Top_Secret_Flag",
                        "solution": "1. You know that **alice** has a weak password so you can try a dictionary attack. A list of common passwords is ready in your home directory. One of possible tools to make a password attack is **hydra**. A command to find the password is **`hydra -l alice -P passlist.txt telnet://server:2323`**. This will reveal alices password **`bacon`**.\n\n2. Now you can connect to the server by using **`telnet server 2323`**, entering username **`alice`** and her password **`bacon`**.\n\n3. To read the flag you can use **`cat flag.txt`**. The flag is **`Top_Secret_Flag`**.\n",
                        "incorrect_answer_limit": 10,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }],
                    "decision_matrix": [{
                        "id": 55,
                        "order": 0,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 56,
                        "order": 1,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 1.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 57,
                        "order": 2,
                        "questionnaire_answered": 1.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }],
                    "related_questions": [{
                        "order": 6,
                        "text": "What is your level of skill in opening a command line on a remote computer?",
                        "question_type": "RFQ",
                        "choices": [],
                        "id": 7
                    }]
                }, {
                    "id": 56,
                    "title": "Privilege Escalation",
                    "order": 5,
                    "phase_type": "TRAINING",
                    "estimated_duration": 13,
                    "allowed_commands": 10,
                    "allowed_wrong_answers": 10,
                    "tasks": [{
                        "id": 7,
                        "title": "Privilege Escalation",
                        "order": 0,
                        "content": "Great, you managed to login to the server as **alice** but there is not much you can do as **alice**. Can you find a way to become **root**? The flag is in the root directory.\n\nOne of common privilege escalation attack vectors is badly configured **sudo**. To see what you can use sudo for, use the **`sudo --list`** command.",
                        "answer": "Cant_Guess_This",
                        "solution": "1. You can see that the only command you can use sudo on is **`less /home/alice/flag.txt`**. There is not much to see in the flag, but you can run this as **root**. Is there a way to get a shell?\n\n2. There is, all you have to do is enter **`!sh`** while running the **`sudo less /home/alice/flag.txt`** to get a root shell.\n\n3. To get the flag, use **`cd`** to enter the root directory and **`cat flag.txt`** to read the flag. The flag is **`Cant_Guess_This`**.",
                        "incorrect_answer_limit": 10,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 8,
                        "title": "Privilege Escalation",
                        "order": 1,
                        "content": "Great, you managed to login to the server as **alice** but there is not much you can do as **alice**. Can you find a way to become **root**? The flag is in the root directory.\n\nOne of common privilege escalation attack vectors is badly configured **sudo**. To see what you can use sudo for, use the **`sudo --list`** command.\n\nYou have probably figured out that you can run **sudo** on a certain **less** command. To get a shell run **`sudo less /home/alice/flag.txt`**, enter the password. Type **`!sh`** to get a root shell.\n\n",
                        "answer": "Cant_Guess_This",
                        "solution": "1. You can see that the only command you can use sudo on is **`less /home/alice/flag.txt`**. There is not much to see in the flag, but you can run this as **root**. Is there a way to get a shell?\n\n2. There is, all you have to do is enter **`!sh`** while running the **`sudo less /home/alice/flag.txt`** to get a root shell.\n\n3. To get the flag, use **`cd`** to enter the root directory and **`cat flag.txt`** to read the flag. The flag is **`Cant_Guess_This`**.",
                        "incorrect_answer_limit": 10,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }],
                    "decision_matrix": [{
                        "id": 58,
                        "order": 0,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 59,
                        "order": 1,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 1.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 60,
                        "order": 2,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 1.0,
                        "completed_in_time": 1.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 1.0
                    }, {
                        "id": 61,
                        "order": 3,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }],
                    "related_questions": [{
                        "order": 7,
                        "text": "What is your level of skill in privilege escalation?",
                        "question_type": "RFQ",
                        "choices": [],
                        "id": 8
                    }, {
                        "order": 4,
                        "text": "What is your level of skill in using basic Linux commands?",
                        "question_type": "RFQ",
                        "choices": [],
                        "id": 5
                    }]
                }, {
                    "id": 58,
                    "title": "Questionnaire example",
                    "order": 6,
                    "phase_type": "QUESTIONNAIRE",
                    "questions": [{
                        "order": 0,
                        "text": "How did you connect to the client?",
                        "question_type": "MCQ",
                        "choices": [{
                            "id": 33,
                            "text": "Graphical user interface of KYPO",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 34,
                            "text": "SSH",
                            "correct": true,
                            "order": 1
                        }],
                        "id": 9
                    }, {
                        "order": 1,
                        "text": "Do you agree that Everything went smoothly?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 35,
                            "text": "Very much",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 36,
                            "text": "A little bit",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 37,
                            "text": "Not really",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 38,
                            "text": "Not at all",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 10
                    }, {
                        "order": 2,
                        "text": "Do you agree that The User Interface is nice?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 39,
                            "text": "Very much",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 40,
                            "text": "A little bit",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 41,
                            "text": "Not really",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 42,
                            "text": "Not at all",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 11
                    }, {
                        "order": 3,
                        "text": "Do you agree that The test was easy?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 43,
                            "text": "Very much",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 44,
                            "text": "A little bit",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 45,
                            "text": "Not really",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 46,
                            "text": "Not at all",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 12
                    }, {
                        "order": 4,
                        "text": "How would you improve this demo?",
                        "question_type": "FFQ",
                        "choices": [],
                        "id": 13
                    }],
                    "questionnaire_type": "GENERAL",
                    "phase_relations": []
                }],
                "show_stepper_bar": true,
                "can_be_archived": false,
                "estimated_duration": 33,
                "last_edited": "2022-01-31T16:35:37.735360Z",
                "last_edited_by": "Igor Ignác"
            },
            sankeyDataDTO: {
                nodes: [{
                    task_id: null,
                    task_order: null,
                    task_title: null,
                    phase_id: null,
                    phase_order: -1,
                    phase_title: null
                }, {
                    task_id: 154,
                    task_order: 2,
                    task_title: 'Getting to know the environment',
                    phase_id: 204,
                    phase_order: 2,
                    phase_title: 'Getting to know the environment'
                }, {
                    task_id: 156,
                    task_order: 1,
                    task_title: 'Looking for server’s IP address',
                    phase_id: 205,
                    phase_order: 3,
                    phase_title: 'Looking for server’s IP address'
                }, {
                    task_id: 160,
                    task_order: 1,
                    task_title: 'Connect to the server',
                    phase_id: 206,
                    phase_order: 4,
                    phase_title: 'Connect to the server'
                }, {
                    task_id: 162,
                    task_order: 0,
                    task_title: 'Find interesting files',
                    phase_id: 207,
                    phase_order: 5,
                    phase_title: 'Find interesting files'
                }, {
                    task_id: 165,
                    task_order: 0,
                    task_title: 'Crack the password to the zip',
                    phase_id: 208,
                    phase_order: 6,
                    phase_title: 'Crack the password to the zip'
                }, {
                    task_id: null,
                    task_order: null,
                    task_title: null,
                    phase_id: null,
                    phase_order: -2,
                    phase_title: null
                }],
                links: [{
                    source: 0,
                    target: 1,
                    value: 1
                }, {
                    source: 5,
                    target: 6,
                    value: 1
                }, {
                    source: 1,
                    target: 2,
                    value: 1
                }, {
                    source: 2,
                    target: 3,
                    value: 1
                }, {
                    source: 3,
                    target: 4,
                    value: 1
                }, {
                    source: 4,
                    target: 5,
                    value: 1
                }]
            }
        },
        simulate: {
            "sankey_diagram": {
                "nodes": [{
                    "task_id": null,
                    "task_order": null,
                    "task_title": null,
                    "phase_id": null,
                    "phase_order": -1,
                    "phase_title": null
                }, {
                    "task_id": 84,
                    "task_order": 0,
                    "task_title": "Get SSH access",
                    "phase_id": 70,
                    "phase_order": 2,
                    "phase_title": "Get SSH access"
                }, {
                    "task_id": 1,
                    "task_order": 0,
                    "task_title": "Getting to know the environment",
                    "phase_id": 2,
                    "phase_order": 3,
                    "phase_title": "Getting to know the environment"
                }, {
                    "task_id": 3,
                    "task_order": 2,
                    "task_title": "Getting to know the environment",
                    "phase_id": 2,
                    "phase_order": 3,
                    "phase_title": "Getting to know the environment"
                }, {
                    "task_id": 4,
                    "task_order": 0,
                    "task_title": "Looking for server’s IP address",
                    "phase_id": 3,
                    "phase_order": 4,
                    "phase_title": "Looking for server’s IP address"
                }, {
                    "task_id": 5,
                    "task_order": 1,
                    "task_title": "Looking for server’s IP address",
                    "phase_id": 3,
                    "phase_order": 4,
                    "phase_title": "Looking for server’s IP address"
                }, {
                    "task_id": 6,
                    "task_order": 2,
                    "task_title": "Looking for server’s IP address",
                    "phase_id": 3,
                    "phase_order": 4,
                    "phase_title": "Looking for server’s IP address"
                }, {
                    "task_id": 7,
                    "task_order": 0,
                    "task_title": "Connect to the server",
                    "phase_id": 4,
                    "phase_order": 5,
                    "phase_title": "Connect to the server"
                }, {
                    "task_id": 8,
                    "task_order": 1,
                    "task_title": "Connect to the server",
                    "phase_id": 4,
                    "phase_order": 5,
                    "phase_title": "Connect to the server"
                }, {
                    "task_id": 9,
                    "task_order": 2,
                    "task_title": "Connect to the server",
                    "phase_id": 4,
                    "phase_order": 5,
                    "phase_title": "Connect to the server"
                }, {
                    "task_id": 10,
                    "task_order": 0,
                    "task_title": "Find interesting files",
                    "phase_id": 5,
                    "phase_order": 6,
                    "phase_title": "Find interesting files"
                }, {
                    "task_id": 11,
                    "task_order": 1,
                    "task_title": "Find interesting files",
                    "phase_id": 5,
                    "phase_order": 6,
                    "phase_title": "Find interesting files"
                }, {
                    "task_id": 12,
                    "task_order": 2,
                    "task_title": "Find interesting files",
                    "phase_id": 5,
                    "phase_order": 6,
                    "phase_title": "Find interesting files"
                }, {
                    "task_id": 13,
                    "task_order": 0,
                    "task_title": "Crack the password to the zip",
                    "phase_id": 6,
                    "phase_order": 7,
                    "phase_title": "Crack the password to the zip"
                }, {
                    "task_id": 14,
                    "task_order": 1,
                    "task_title": "Crack the password to the zip",
                    "phase_id": 6,
                    "phase_order": 7,
                    "phase_title": "Crack the password to the zip"
                }, {
                    "task_id": 15,
                    "task_order": 2,
                    "task_title": "Crack the password to the zip",
                    "phase_id": 6,
                    "phase_order": 7,
                    "phase_title": "Crack the password to the zip"
                }, {
                    "task_id": null,
                    "task_order": null,
                    "task_title": null,
                    "phase_id": null,
                    "phase_order": -2,
                    "phase_title": null
                }],
                "links": [{
                    "source": 1,
                    "target": 2,
                    "value": 14
                }, {
                    "source": 1,
                    "target": 3,
                    "value": 5
                }, {
                    "source": 2,
                    "target": 6,
                    "value": 8
                }, {
                    "source": 3,
                    "target": 5,
                    "value": 3
                }, {
                    "source": 2,
                    "target": 5,
                    "value": 5
                }, {
                    "source": 2,
                    "target": 4,
                    "value": 1
                }, {
                    "source": 3,
                    "target": 6,
                    "value": 2
                }, {
                    "source": 6,
                    "target": 9,
                    "value": 3
                }, {
                    "source": 5,
                    "target": 7,
                    "value": 3
                }, {
                    "source": 5,
                    "target": 8,
                    "value": 5
                }, {
                    "source": 4,
                    "target": 7,
                    "value": 1
                }, {
                    "source": 6,
                    "target": 8,
                    "value": 7
                }, {
                    "source": 8,
                    "target": 11,
                    "value": 6
                }, {
                    "source": 7,
                    "target": 10,
                    "value": 2
                }, {
                    "source": 8,
                    "target": 10,
                    "value": 4
                }, {
                    "source": 7,
                    "target": 11,
                    "value": 2
                }, {
                    "source": 9,
                    "target": 12,
                    "value": 1
                }, {
                    "source": 8,
                    "target": 12,
                    "value": 2
                }, {
                    "source": 9,
                    "target": 11,
                    "value": 2
                }, {
                    "source": 10,
                    "target": 13,
                    "value": 5
                }, {
                    "source": 10,
                    "target": 14,
                    "value": 1
                }, {
                    "source": 11,
                    "target": 13,
                    "value": 7
                }, {
                    "source": 11,
                    "target": 14,
                    "value": 3
                }, {
                    "source": 12,
                    "target": 14,
                    "value": 2
                }, {
                    "source": 12,
                    "target": 15,
                    "value": 1
                }, {
                    "source": 0,
                    "target": 1,
                    "value": 19
                }, {
                    "source": 15,
                    "target": 16,
                    "value": 1
                }, {
                    "source": 14,
                    "target": 16,
                    "value": 6
                }, {
                    "source": 13,
                    "target": 16,
                    "value": 12
                }]
            },
            "training_definition": {
                "id": 1,
                "title": "Uploaded Junior hacker training",
                "description": null,
                "state": "UNRELEASED",
                "show_stepper_bar": true,
                "estimated_duration": 0,
                "prerequisites": [],
                "outcomes": [],
                "phases": [{
                    "id": 1,
                    "title": "Introductory info",
                    "phase_type": "INFO",
                    "order": 0,
                    "content": "Welcome! You are a junior hacker, who only recently entered the top-secret school of a legendary master hacker, preceded by incredible legends. Today is your first day of field training, and the master will take you to one of his favorite workplaces -- a crowded urban settlement. What makes such a common place really special? A lot of people without the knowledge of information security basics, with dozens of unsecured routers and default passwords, which invite you to visit their local networks.\nYou are in a car at the urban settlement parking lot. The master brought his laptop with Kali Linux that, together with his advice, you can use in today's outdoor training. The main goal of today's training is simple: to steal anything that can be valuable."
                }, {
                    "id": 7,
                    "title": "Pre-game assessment",
                    "phase_type": "QUESTIONNAIRE",
                    "order": 1,
                    "questionnaire_type": "ADAPTIVE",
                    "questions": [{
                        "order": 7,
                        "text": "What is your level of skill in using basic Linux commands?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 1,
                            "text": "None",
                            "correct": false,
                            "order": 0
                        }, {
                            "id": 2,
                            "text": "Low",
                            "correct": false,
                            "order": 1
                        }, {
                            "id": 3,
                            "text": "Medium",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 4,
                            "text": "High",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 1
                    }, {
                        "order": 6,
                        "text": "What is your level of skill in looking for opened ports?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 5,
                            "text": "None",
                            "correct": false,
                            "order": 0
                        }, {
                            "id": 6,
                            "text": "Low",
                            "correct": false,
                            "order": 1
                        }, {
                            "id": 7,
                            "text": "Medium",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 8,
                            "text": "High",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 2
                    }, {
                        "order": 5,
                        "text": "What is your level of skill in connection to the server securely?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 9,
                            "text": "None",
                            "correct": false,
                            "order": 0
                        }, {
                            "id": 10,
                            "text": "Low",
                            "correct": false,
                            "order": 1
                        }, {
                            "id": 11,
                            "text": "Medium",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 12,
                            "text": "High",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 3
                    }, {
                        "order": 0,
                        "text": "What is your level of skill in using the msfconsole interface?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 13,
                            "text": "None",
                            "correct": false,
                            "order": 0
                        }, {
                            "id": 14,
                            "text": "Low",
                            "correct": false,
                            "order": 1
                        }, {
                            "id": 15,
                            "text": "Medium",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 16,
                            "text": "High",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 4
                    }, {
                        "order": 1,
                        "text": "What is your level of skill in using WinSCP?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 17,
                            "text": "None",
                            "correct": false,
                            "order": 0
                        }, {
                            "id": 18,
                            "text": "Low",
                            "correct": false,
                            "order": 1
                        }, {
                            "id": 19,
                            "text": "Medium",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 20,
                            "text": "High",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 5
                    }, {
                        "order": 2,
                        "text": "What is your level of skill in building Java projects using Maven?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 21,
                            "text": "None",
                            "correct": false,
                            "order": 0
                        }, {
                            "id": 22,
                            "text": "Low",
                            "correct": false,
                            "order": 1
                        }, {
                            "id": 23,
                            "text": "Medium",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 24,
                            "text": "High",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 6
                    }, {
                        "order": 3,
                        "text": "What is your level of skill in zip and unzip files in CLI?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 25,
                            "text": "None",
                            "correct": false,
                            "order": 0
                        }, {
                            "id": 26,
                            "text": "Low",
                            "correct": false,
                            "order": 1
                        }, {
                            "id": 27,
                            "text": "Medium",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 28,
                            "text": "High",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 7
                    }, {
                        "order": 4,
                        "text": "What is your level of skill in downloading and transferring files into the server?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 29,
                            "text": "None",
                            "correct": false,
                            "order": 0
                        }, {
                            "id": 30,
                            "text": "Low",
                            "correct": false,
                            "order": 1
                        }, {
                            "id": 31,
                            "text": "Medium",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 32,
                            "text": "High",
                            "correct": true,
                            "order": 3
                        }],
                        "id": 8
                    }],
                    "phase_relations": [{
                        "id": 1,
                        "order": 0,
                        "phase_order": 1,
                        "success_rate": 100,
                        "question_orders": [0],
                        "question_ids": [1],
                        "phase_id": 2
                    }, {
                        "id": 2,
                        "order": 1,
                        "phase_order": 2,
                        "success_rate": 100,
                        "question_orders": [1],
                        "question_ids": [2],
                        "phase_id": 3
                    }, {
                        "id": 3,
                        "order": 2,
                        "phase_order": 3,
                        "success_rate": 100,
                        "question_orders": [2],
                        "question_ids": [3],
                        "phase_id": 4
                    }, {
                        "id": 4,
                        "order": 3,
                        "phase_order": 4,
                        "success_rate": 100,
                        "question_orders": [2],
                        "question_ids": [3],
                        "phase_id": 5
                    }, {
                        "id": 5,
                        "order": 4,
                        "phase_order": 5,
                        "success_rate": 100,
                        "question_orders": [0],
                        "question_ids": [1],
                        "phase_id": 6
                    }, {
                        "id": 63,
                        "order": 5,
                        "phase_order": 8,
                        "success_rate": 0,
                        "question_orders": [2],
                        "question_ids": [3],
                        "phase_id": 70
                    }]
                }, {
                    "id": 70,
                    "title": "Get SSH access",
                    "phase_type": "TRAINING",
                    "order": 2,
                    "estimated_duration": 0,
                    "allowed_commands": 0,
                    "allowed_wrong_answers": 0,
                    "tasks": [{
                        "id": 84,
                        "title": "Get SSH access",
                        "order": 0,
                        "global_order": null,
                        "content": "For accessing KYPO virtual machines using your local command-line tool, click on `Get SSH access` button to download ZIP file and then follow the instructions in the [documentation](https://docs.crp.kypo.muni.cz/user-guide-advanced/sandboxes/sandbox-access/#user-access). When you are ready to advance to the next phase, submit the flag `startgame`.\n\nClick the \n\n## Flag: startgame",
                        "answer": "Secret flag",
                        "solution": "startgame",
                        "incorrect_answer_limit": 100,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }],
                    "decision_matrix": [{
                        "id": 109,
                        "order": 0,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }],
                    "related_questions": null
                }, {
                    "id": 2,
                    "title": "Getting to know the environment",
                    "phase_type": "TRAINING",
                    "order": 3,
                    "estimated_duration": 3,
                    "allowed_commands": 10,
                    "allowed_wrong_answers": 5,
                    "tasks": [{
                        "id": 1,
                        "title": "Getting to know the environment",
                        "order": 0,
                        "global_order": null,
                        "content": "The level provides you the time to configure SSH access to the sandbox machines locally. If you rather use the Spice console, skip the level by submitting the flag. \n\nClick the `Get SSH access` button to download ZIP file and then follow the instructions in the [documentation](https://docs.crp.kypo.muni.cz/user-guide-advanced/sandboxes/sandbox-access/#user-access). When you are ready to advance to the next phase, submit the flag\n\n## Flag: startgame",
                        "answer": "wordlist.txt",
                        "solution": "```\nroot@attacker:~# ls /root/hacking\nwordlist.txt\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 2,
                        "title": "Getting to know the environment",
                        "order": 1,
                        "global_order": null,
                        "content": "The master handed you a laptop, saying to you:\n*\"You studied hard in the past weeks. Now, you are ready for real-world hacking training, but you need the right equipment. In today's lecture, I will teach you using Kali Linux and show you some of its basic functionality, which will make hacking easier.\"*\n\nFirst, get acquainted with the **command line** at your **Kali Linux**, the most popular Linux distribution for penetration testing. Or hacking? :-)\nLog in as the user **root** with the password **toor**. Open **Terminal** (Terminal Emulator in the main menu) and look around your home directory `/root`. You will need this skill when you hack into another Linux machine.\"\nThe answer for this task is the **name of the single file** stored in a non-empty directory in your home directory.\n\nUse `ls`. If you want to change the directory, use `cd`. Your home folder is located in `/root` directory.",
                        "answer": "wordlist.txt",
                        "solution": "```\nroot@attacker:~# ls /root/hacking\nwordlist.txt\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 3,
                        "title": "Getting to know the environment",
                        "order": 2,
                        "global_order": null,
                        "content": "The master handed you a laptop, saying to you:\n*\"You studied hard in the past weeks. Now, you are ready for real-world hacking training, but you need the right equipment. In today's lecture, I will teach you using Kali Linux and show you some of its basic functionality, which will make hacking easier.\"*\n\nFirst, get acquainted with the **command line** at your **Kali Linux**, the most popular Linux distribution for penetration testing. Or hacking? :-)\nLog in as the user **root** with the password **toor**. Open **Terminal** (Terminal Emulator in the main menu) and look around your home directory `/root`. You will need this skill when you hack into another Linux machine.\"\nThe answer for this task is the **name of the single file** stored in a non-empty directory in your home directory.\n\nUse `ls`. If you want to change the directory, use `cd`. Your home folder is located in `/root` directory.",
                        "answer": "wordlist.txt",
                        "solution": "```\nroot@attacker:~# ls /root/hacking\nwordlist.txt\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }],
                    "decision_matrix": [{
                        "id": 110,
                        "order": 0,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 1,
                        "order": 1,
                        "questionnaire_answered": 1.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }],
                    "related_questions": null
                }, {
                    "id": 3,
                    "title": "Looking for server’s IP address",
                    "phase_type": "TRAINING",
                    "order": 4,
                    "estimated_duration": 5,
                    "allowed_commands": 10,
                    "allowed_wrong_answers": 5,
                    "tasks": [{
                        "id": 4,
                        "title": "Looking for server’s IP address",
                        "order": 0,
                        "global_order": null,
                        "content": "You already managed to guess the password on a Wi-Fi router with the master's help (**12345678**, really?!), so now you are already connected to the local network of one household.\n\nThe address space of your local network is **10.1.26.0/24**. \n\nThe master told you that your goal is to gain access to the server. **Scan the network** and recognize the server's **IP address**. You can recognize the server by its **running services**.\n\nThe server you are searching for has **more open ports** than other machines in the network.\n\nThe answer is the **port number** on which the **file sharing service** is running on the server's machine.",
                        "answer": "2049",
                        "solution": "```\nroot@attacker:~# nmap 10.1.26.0/24\n\n2049/tcp open  nfs\n\n2049\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 5,
                        "title": "Looking for server’s IP address",
                        "order": 1,
                        "global_order": null,
                        "content": "You already managed to guess the password on a Wi-Fi router with the master's help (**12345678**, really?!), so now you are already connected to the local network of one household.\n\nThe address space of your local network is **10.1.26.0/24**. \n\nThe master told you that your goal is to gain access to the server. **Scan the network** and recognize the server's **IP address**. You can recognize the server by its **running services**.\n\nThe server you are searching for has **more open ports** than other machines in the network.\n\nThe answer is the **port number** on which the **file sharing service** is running on the server's machine.\n\nUse the command-line tool `nmap`. If you can't figure out how to use the tool, call it with the suffix `--help` to get detailed instructions, consult its manual page `man nmap`, or use your favourite search engine.\n\n",
                        "answer": "2049",
                        "solution": "```\nroot@attacker:~# nmap 10.1.26.0/24\n\n2049/tcp open  nfs\n\n2049\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 6,
                        "title": "Looking for server’s IP address",
                        "order": 2,
                        "global_order": null,
                        "content": "You already managed to guess the password on a Wi-Fi router with the master's help (**12345678**, really?!), so now you are already connected to the local network of one household.\n\nThe address space of your local network is **10.1.26.0/24**. \n\nThe master told you that your goal is to gain access to the server. **Scan the network** and recognize the server's **IP address**. You can recognize the server by its **running services**.\n\nThe server you are searching for has **more open ports** than other machines in the network.\n\nThe answer is the **port number** on which the **file sharing service** is running on the server's machine.\n\nUse the command-line tool `nmap`. If you can't figure out how to use the tool, call it with the suffix `--help` to get detailed instructions, consult its manual page `man nmap`, or use your favourite search engine.\n\nRun `nmap 10.1.26.0/24` and see open ports in its output. Nmap scan report for `10.1.26.9` shows the most running services.",
                        "answer": "2049",
                        "solution": "```\nroot@attacker:~# nmap 10.1.26.0/24\n\n2049/tcp open  nfs\n\n2049\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }],
                    "decision_matrix": [{
                        "id": 111,
                        "order": 0,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 2,
                        "order": 1,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 1.0,
                        "completed_in_time": 1.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 3,
                        "order": 2,
                        "questionnaire_answered": 1.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }],
                    "related_questions": null
                }, {
                    "id": 4,
                    "title": "Connect to the server",
                    "phase_type": "TRAINING",
                    "order": 5,
                    "estimated_duration": 5,
                    "allowed_commands": 10,
                    "allowed_wrong_answers": 5,
                    "tasks": [{
                        "id": 7,
                        "title": "Connect to the server",
                        "order": 0,
                        "global_order": null,
                        "content": "You know the IP address of the server. It was easy, right?\n\nNow comes the more interesting part of how to use this knowledge to your **advantage**. Connect **remotely** to the server and use **legitimate credentials**. The master told you that the login details will most likely one of these: **admin/password**, **admin/123456** or **admin/admin**. It's worth trying, isn't it?\n\nThe answer is the **entire command** for logging into the server.",
                        "answer": "ssh admin@10.1.26.9",
                        "solution": "```\nroot@attacker:~# ssh admin@10.1.26.9\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nadmin@10.1.26.9's password: admin\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 8,
                        "title": "Connect to the server",
                        "order": 1,
                        "global_order": null,
                        "content": "You know the IP address of the server. It was easy, right?\n\nNow comes the more interesting part of how to use this knowledge to your **advantage**. Connect **remotely** to the server and use **legitimate credentials**. The master told you that the login details will most likely one of these: **admin/password**, **admin/123456** or **admin/admin**. It's worth trying, isn't it?\n\nThe answer is the **entire command** for logging into the server.\n\nUse the command-line tool `ssh`.\n\nThe syntax is `ssh username@hostname_or_ip`, where the part after @ is the `hostname` or IP address of the device you want to connect to.\n\n",
                        "answer": "ssh admin@10.1.26.9",
                        "solution": "```\nroot@attacker:~# ssh admin@10.1.26.9\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nadmin@10.1.26.9's password: admin\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 9,
                        "title": "Connect to the server",
                        "order": 2,
                        "global_order": null,
                        "content": "You know the IP address of the server. It was easy, right?\n\nNow comes the more interesting part of how to use this knowledge to your **advantage**. Connect **remotely** to the server and use **legitimate credentials**. The master told you that the login details will most likely one of these: **admin/password**, **admin/123456** or **admin/admin**. It's worth trying, isn't it?\n\nThe answer is the **entire command** for logging into the server.\n\nUse the command-line tool `ssh`.\n\nThe syntax is `ssh username@hostname_or_ip`, where the part after @ is the `hostname` or IP address of the device you want to connect to.\n\nTry one of the master's recommendations.",
                        "answer": "ssh admin@10.1.26.9",
                        "solution": "```\nroot@attacker:~# ssh admin@10.1.26.9\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nadmin@10.1.26.9's password: admin\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }],
                    "decision_matrix": [{
                        "id": 112,
                        "order": 0,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 4,
                        "order": 1,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 1.0,
                        "completed_in_time": 1.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 5,
                        "order": 2,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 6,
                        "order": 3,
                        "questionnaire_answered": 1.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }],
                    "related_questions": null
                }, {
                    "id": 5,
                    "title": "Find interesting files",
                    "phase_type": "TRAINING",
                    "order": 6,
                    "estimated_duration": 5,
                    "allowed_commands": 10,
                    "allowed_wrong_answers": 5,
                    "tasks": [{
                        "id": 10,
                        "title": "Find interesting files",
                        "order": 0,
                        "global_order": null,
                        "content": "You are already logged in to the server. Now is the time to find something **exciting** and ideally **compromising**, but we don't know exactly what we are looking for. However... do you still remember the **list of services** running on the server based on the **Nmap scan**? You already discovered that the server runs the **NFS** service. **NFS** protocol is used for **file sharing** and **remote access** to files over a computer network. Maybe this server is used to back up data. Try to look whether the admin's home directory stores any files. Then, copy a useful file to your attacker machine.\n\nThe answer is the **name** of the **only ZIP file** (including the extension) located somewhere in the home directory.",
                        "answer": ".invoices2019.zip",
                        "solution": "```\nroot@attacker:/home# scp admin@10.1.26.9:~/personal/.invoices2019.zip .\nadmin@10.1.26.9's password: admin\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 11,
                        "title": "Find interesting files",
                        "order": 1,
                        "global_order": null,
                        "content": "You are already logged in to the server. Now is the time to find something **exciting** and ideally **compromising**, but we don't know exactly what we are looking for. However... do you still remember the **list of services** running on the server based on the **Nmap scan**? You already discovered that the server runs the **NFS** service. **NFS** protocol is used for **file sharing** and **remote access** to files over a computer network. Maybe this server is used to back up data. Try to look whether the admin's home directory stores any files. Then, copy a useful file to your attacker machine.\n\nThe answer is the **name** of the **only ZIP file** (including the extension) located somewhere in the home directory.\n\nUse **scp** tool to copy the file.\n\nUse this syntax for copying from remote to local machine:\n`scp @: /`",
                        "answer": ".invoices2019.zip",
                        "solution": "```\nroot@attacker:/home# scp admin@10.1.26.9:~/personal/.invoices2019.zip .\nadmin@10.1.26.9's password: admin\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 12,
                        "title": "Find interesting files",
                        "order": 2,
                        "global_order": null,
                        "content": "You are already logged in to the server. Now is the time to find something **exciting** and ideally **compromising**, but we don't know exactly what we are looking for. However... do you still remember the **list of services** running on the server based on the **Nmap scan**? You already discovered that the server runs the **NFS** service. **NFS** protocol is used for **file sharing** and **remote access** to files over a computer network. Maybe this server is used to back up data. Try to look whether the admin's home directory stores any files. Then, copy a useful file to your attacker machine.\n\nThe answer is the **name** of the **only ZIP file** (including the extension) located somewhere in the home directory.\n\nUse **scp** tool to copy the file.\n\nUse this syntax for copying from remote to local machine:\n`scp @: /`\n\nList directories and files including the hidden ones in the admin's `$HOME` directory (/home/admin).",
                        "answer": ".invoices2019.zip",
                        "solution": "```\nroot@attacker:/home# scp admin@10.1.26.9:~/personal/.invoices2019.zip .\nadmin@10.1.26.9's password: admin\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }],
                    "decision_matrix": [{
                        "id": 113,
                        "order": 0,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 7,
                        "order": 1,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 1.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 8,
                        "order": 2,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 1.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 9,
                        "order": 3,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 1.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 1.0
                    }, {
                        "id": 10,
                        "order": 4,
                        "questionnaire_answered": 1.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }],
                    "related_questions": null
                }, {
                    "id": 6,
                    "title": "Crack the password to the zip",
                    "phase_type": "TRAINING",
                    "order": 7,
                    "estimated_duration": 10,
                    "allowed_commands": 10,
                    "allowed_wrong_answers": 5,
                    "tasks": [{
                        "id": 13,
                        "title": "Crack the password to the zip",
                        "order": 0,
                        "global_order": null,
                        "content": "You have found out that some **accounting** company's files have been uploaded to this server. And you have a ZIP file with a promising name in **your** hands, but unfortunately, it is **password-protected**!\nThe master advised you that a password cracking tool called **fcrackzip** was installed on his Kali machine. Find out how you could break the password and reveal the content of the ZIP. Use `man fcrackzip` rather than `fcrackzip -h` for **instructions** on the tool usage.\n\nThe answer is the **password** to the ZIP.\n\n",
                        "answer": "IhateMyJob",
                        "solution": "```\nroot@attacker:~# fcrackzip -D -u -p /root/hacking/wordlist.txt .invoices2019.zip\n\nPASSWORD FOUND!!!!: pw == IhateMyJob\n\nroot@attacker:/home# unzip .invoices2019.zip\n\nArchive:  .invoices2019.zip\n   creating: .invoices2019/\n[.invoices2019.zip] invoices2019/TAX15796252.txt password: IhateMyJob\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 14,
                        "title": "Crack the password to the zip",
                        "order": 1,
                        "global_order": null,
                        "content": "You have found out that some **accounting** company's files have been uploaded to this server. And you have a ZIP file with a promising name in **your** hands, but unfortunately, it is **password-protected**!\nThe master advised you that a password cracking tool called **fcrackzip** was installed on his Kali machine. Find out how you could break the password and reveal the content of the ZIP. Use `man fcrackzip` rather than `fcrackzip -h` for **instructions** on the tool usage.\n\nThe answer is the **password** to the ZIP.\n\nYou can perform a dictionary attack by using `-D` option of the `fcrackzip` command, but be aware that you have to use a **wordlist**. One is stored somewhere at your attacker machine.\n",
                        "answer": "IhateMyJob",
                        "solution": "```\nroot@attacker:~# fcrackzip -D -u -p /root/hacking/wordlist.txt .invoices2019.zip\n\nPASSWORD FOUND!!!!: pw == IhateMyJob\n\nroot@attacker:/home# unzip .invoices2019.zip\n\nArchive:  .invoices2019.zip\n   creating: .invoices2019/\n[.invoices2019.zip] invoices2019/TAX15796252.txt password: IhateMyJob\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }, {
                        "id": 15,
                        "title": "Crack the password to the zip",
                        "order": 2,
                        "global_order": null,
                        "content": "You have found out that some **accounting** company's files have been uploaded to this server. And you have a ZIP file with a promising name in **your** hands, but unfortunately, it is **password-protected**!\nThe master advised you that a password cracking tool called **fcrackzip** was installed on his Kali machine. Find out how you could break the password and reveal the content of the ZIP. Use `man fcrackzip` rather than `fcrackzip -h` for **instructions** on the tool usage.\n\nThe answer is the **password** to the ZIP.\n\nYou can perform a dictionary attack by using `-D` option of the `fcrackzip` command, but be aware that you have to use a **wordlist**. One is stored somewhere at your attacker machine.\n\nIn hacking directory at your Kali, where you have already discovered it.",
                        "answer": "IhateMyJob",
                        "solution": "```\nroot@attacker:~# fcrackzip -D -u -p /root/hacking/wordlist.txt .invoices2019.zip\n\nPASSWORD FOUND!!!!: pw == IhateMyJob\n\nroot@attacker:/home# unzip .invoices2019.zip\n\nArchive:  .invoices2019.zip\n   creating: .invoices2019/\n[.invoices2019.zip] invoices2019/TAX15796252.txt password: IhateMyJob\n```",
                        "incorrect_answer_limit": 5,
                        "modify_sandbox": false,
                        "sandbox_change_expected_duration": 0
                    }],
                    "decision_matrix": [{
                        "id": 114,
                        "order": 0,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 11,
                        "order": 1,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 1.0,
                        "completed_in_time": 1.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 1.0
                    }, {
                        "id": 12,
                        "order": 2,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 13,
                        "order": 3,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 14,
                        "order": 4,
                        "questionnaire_answered": 0.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 1.0,
                        "wrong_answers": 0.0
                    }, {
                        "id": 15,
                        "order": 5,
                        "questionnaire_answered": 1.0,
                        "keyword_used": 0.0,
                        "completed_in_time": 0.0,
                        "solution_displayed": 0.0,
                        "wrong_answers": 0.0
                    }],
                    "related_questions": null
                }, {
                    "id": 8,
                    "title": "Post-game questionnaire",
                    "phase_type": "QUESTIONNAIRE",
                    "order": 8,
                    "questionnaire_type": "GENERAL",
                    "questions": [{
                        "order": 0,
                        "text": "Did you feel the tasks were designed so that you can complete the training in a timely manner?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 33,
                            "text": "Not at all ",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 34,
                            "text": "Slightly",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 35,
                            "text": "Moderately",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 36,
                            "text": "Much",
                            "correct": true,
                            "order": 3
                        }, {
                            "id": 37,
                            "text": "Very much",
                            "correct": true,
                            "order": 4
                        }],
                        "id": 9
                    }, {
                        "order": 1,
                        "text": "Did you feel you got stuck at some point during the training?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 38,
                            "text": "Not at all",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 39,
                            "text": "Slightly",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 40,
                            "text": "Moderately",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 41,
                            "text": "Much",
                            "correct": true,
                            "order": 3
                        }, {
                            "id": 42,
                            "text": "Very much",
                            "correct": true,
                            "order": 4
                        }],
                        "id": 10
                    }, {
                        "order": 2,
                        "text": "How much did you enjoy the training?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 43,
                            "text": "Not at all",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 44,
                            "text": "Slightly",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 45,
                            "text": "Moderately",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 46,
                            "text": "Much",
                            "correct": true,
                            "order": 3
                        }, {
                            "id": 47,
                            "text": "Very much",
                            "correct": true,
                            "order": 4
                        }],
                        "id": 11
                    }, {
                        "order": 3,
                        "text": "Did you feel the training should be more difficult for you?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 48,
                            "text": "Not at all ",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 49,
                            "text": "Slightly",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 50,
                            "text": "Moderately",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 51,
                            "text": "Much",
                            "correct": true,
                            "order": 3
                        }, {
                            "id": 52,
                            "text": "Very much",
                            "correct": true,
                            "order": 4
                        }],
                        "id": 12
                    }, {
                        "order": 4,
                        "text": "Did you feel you would like the training to be longer with additional tasks to solve?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 53,
                            "text": "Not at all ",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 54,
                            "text": "Slightly",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 55,
                            "text": "Moderately",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 56,
                            "text": "Much",
                            "correct": true,
                            "order": 3
                        }, {
                            "id": 57,
                            "text": "Very much",
                            "correct": true,
                            "order": 4
                        }],
                        "id": 13
                    }, {
                        "order": 5,
                        "text": "Would you like to play more cybersecurity training sessions like this one?",
                        "question_type": "RFQ",
                        "choices": [{
                            "id": 58,
                            "text": "Not at all",
                            "correct": true,
                            "order": 0
                        }, {
                            "id": 59,
                            "text": "Slightly",
                            "correct": true,
                            "order": 1
                        }, {
                            "id": 60,
                            "text": "Moderately",
                            "correct": true,
                            "order": 2
                        }, {
                            "id": 61,
                            "text": "Much",
                            "correct": true,
                            "order": 3
                        }, {
                            "id": 62,
                            "text": "Very much",
                            "correct": true,
                            "order": 4
                        }],
                        "id": 14
                    }, {
                        "order": 6,
                        "text": "Do you have other comments or notes from the training?",
                        "question_type": "FFQ",
                        "choices": [],
                        "id": 15
                    }],
                    "phase_relations": []
                }],
                "last_edited": null
            },
            "cache_key": "102-pa165-9270"
        },
        generate: {
            "nodes": [{
                "task_id": null,
                "task_order": null,
                "task_title": null,
                "phase_id": null,
                "phase_order": -1,
                "phase_title": null
            }, {
                "task_id": 84,
                "task_order": 0,
                "task_title": "Get SSH access",
                "phase_id": 70,
                "phase_order": 0,
                "phase_title": "Get SSH access"
            }, {
                "task_id": 1,
                "task_order": 0,
                "task_title": "Getting to know the environment",
                "phase_id": 2,
                "phase_order": 1,
                "phase_title": "Getting to know the environment"
            }, {
                "task_id": 3,
                "task_order": 2,
                "task_title": "Getting to know the environment",
                "phase_id": 2,
                "phase_order": 1,
                "phase_title": "Getting to know the environment"
            }, {
                "task_id": 4,
                "task_order": 0,
                "task_title": "Looking for server’s IP address",
                "phase_id": 3,
                "phase_order": 2,
                "phase_title": "Looking for server’s IP address"
            }, {
                "task_id": 5,
                "task_order": 1,
                "task_title": "Looking for server’s IP address",
                "phase_id": 3,
                "phase_order": 2,
                "phase_title": "Looking for server’s IP address"
            }, {
                "task_id": 6,
                "task_order": 2,
                "task_title": "Looking for server’s IP address",
                "phase_id": 3,
                "phase_order": 2,
                "phase_title": "Looking for server’s IP address"
            }, {
                "task_id": 8,
                "task_order": 1,
                "task_title": "Connect to the server",
                "phase_id": 4,
                "phase_order": 3,
                "phase_title": "Connect to the server"
            }, {
                "task_id": 9,
                "task_order": 2,
                "task_title": "Connect to the server",
                "phase_id": 4,
                "phase_order": 3,
                "phase_title": "Connect to the server"
            }, {
                "task_id": 10,
                "task_order": 0,
                "task_title": "Find interesting files",
                "phase_id": 5,
                "phase_order": 4,
                "phase_title": "Find interesting files"
            }, {
                "task_id": 11,
                "task_order": 1,
                "task_title": "Find interesting files",
                "phase_id": 5,
                "phase_order": 4,
                "phase_title": "Find interesting files"
            }, {
                "task_id": 12,
                "task_order": 2,
                "task_title": "Find interesting files",
                "phase_id": 5,
                "phase_order": 4,
                "phase_title": "Find interesting files"
            }, {
                "task_id": 13,
                "task_order": 0,
                "task_title": "Crack the password to the zip",
                "phase_id": 6,
                "phase_order": 5,
                "phase_title": "Crack the password to the zip"
            }, {
                "task_id": 14,
                "task_order": 1,
                "task_title": "Crack the password to the zip",
                "phase_id": 6,
                "phase_order": 5,
                "phase_title": "Crack the password to the zip"
            }, {
                "task_id": 15,
                "task_order": 2,
                "task_title": "Crack the password to the zip",
                "phase_id": 6,
                "phase_order": 5,
                "phase_title": "Crack the password to the zip"
            }],
            "links": [{
                "source": 0,
                "target": 1,
                "value": 19
            }, {
                "source": 1,
                "target": 2,
                "value": 13
            }, {
                "source": 2,
                "target": 6,
                "value": 3
            }, {
                "source": 6,
                "target": 7,
                "value": 4
            }, {
                "source": 7,
                "target": 10,
                "value": 11
            }, {
                "source": 10,
                "target": 13,
                "value": 7
            }, {
                "source": 2,
                "target": 5,
                "value": 6
            }, {
                "source": 5,
                "target": 7,
                "value": 9
            }, {
                "source": 7,
                "target": 9,
                "value": 3
            }, {
                "source": 9,
                "target": 13,
                "value": 3
            }, {
                "source": 6,
                "target": 8,
                "value": 2
            }, {
                "source": 8,
                "target": 11,
                "value": 1
            }, {
                "source": 11,
                "target": 14,
                "value": 1
            }, {
                "source": 1,
                "target": 3,
                "value": 6
            }, {
                "source": 3,
                "target": 5,
                "value": 3
            }, {
                "source": 7,
                "target": 11,
                "value": 3
            }, {
                "source": 11,
                "target": 13,
                "value": 3
            }, {
                "source": 2,
                "target": 4,
                "value": 4
            }, {
                "source": 4,
                "target": 7,
                "value": 4
            }, {
                "source": 10,
                "target": 12,
                "value": 5
            }, {
                "source": 3,
                "target": 6,
                "value": 3
            }, {
                "source": 8,
                "target": 10,
                "value": 1
            }]
        }
    }
}
