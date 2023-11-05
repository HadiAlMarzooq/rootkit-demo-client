const steps = [
  {
    title: "Introduction",
    command: "",
    explanation:
      "This demonstration will walk you through a scenario simulating a rootkit infection on a system.",
    expectedOutput:
      "Welcome to the rootkit simulation demo. This interactive session will guide you through the effects of a rootkit infection on a computer system.",
  },
  {
    title: "Connect to Local Machine",
    command: "ssh local",
    explanation: "Connects to the local machine to start the session.",
    expectedOutput: "Connected to local machine.",
  },
  {
    title: "List Directory Contents",
    command: "ls",
    explanation:
      "Lists the contents of the current directory, which should be normal before infection.",
    expectedOutput: "total 1\n-rw-r--r-- 1 user user 0 Nov 5 12:00 example.txt",
  },
  {
    title: "Create Sensitive File",
    command: "create secret_plan.txt",
    explanation:
      "Creates a new file named secret_plan.txt to simulate sensitive content on the system.",
    expectedOutput: "File secret_plan.txt created.",
  },
  {
    title: "Write to Sensitive File",
    command: 'write secret_plan.txt "Top Secret Content"',
    explanation:
      "Writes 'Top Secret Content' into secret_plan.txt to simulate sensitive data.",
    expectedOutput: "Content written to secret_plan.txt.",
  },
  {
    title: "Read Sensitive File",
    command: "read secret_plan.txt",
    explanation:
      "Reads the content of secret_plan.txt to verify that the write operation was successful.",
    expectedOutput: "Top Secret Content",
  },
  {
    title: "Simulate Infection",
    command: "infect local",
    explanation: "Simulates the infection of the local machine with a rootkit.",
    expectedOutput: "System infected. Rootkit active.",
  },
  {
    title: "List Directory Contents Post-Infection",
    command: "ls",
    explanation:
      "Lists the directory contents again, but this time secret_plan.txt might be hidden by the rootkit, demonstrating how rootkits can hide files.",
    expectedOutput: "total 1\t-rw-r--r-- 1 user user 0 Nov 5 12:00 example.txt",
  },
  {
    title: "Attempt Elevated Listing",
    command: "sudo ls",
    explanation:
      "Tries to list directory contents with root privileges, which should not be allowed for the normal user, but due to the rootkit infection, the command might execute, showing privilege escalation.",
    expectedOutput:
      "total 2\n-rw-r--r-- 1 root root 0 Nov 5 12:00 example.txt\n-rw------- 1 root root 0 Nov 5 12:00 secret_plan.txt",
  },
  {
    title: "Read Sensitive File Post-Infection",
    command: "read secret_plan.txt",
    explanation:
      "Attempts to read secret_plan.txt again, which may fail if the rootkit hides the file from normal read attempts.",
    expectedOutput: "Error: File not found.",
  },
  {
    title: "Read Sensitive File with Elevated Privileges",
    command: "sudo read secret_plan.txt",
    explanation:
      "Successfully reads secret_plan.txt using elevated privileges provided by the rootkit, demonstrating unauthorized access to hidden data.",
    expectedOutput: "Top Secret Content",
  },
  {
    title: "Create Unauthorized File",
    command: "create backdoor.sh",
    explanation:
      "The rootkit may allow the creation of files that normally would be restricted, like a script that could be used for persistent access.",
    expectedOutput: "File backdoor.sh created.",
  },
  {
    title: "Write to Unauthorized File",
    command: "write backdoor.sh \"echo 'Backdoor enabled'\"",
    explanation: "Writes a mock backdoor activation script.",
    expectedOutput: "Content written to backdoor.sh.",
  },
  {
    title: "Execute Unauthorized Script",
    command: "sudo ./backdoor.sh",
    explanation:
      "Executes the backdoor script with root privileges, simulating how a rootkit can execute unauthorized commands as root.",
    expectedOutput: "Backdoor enabled",
  },
  {
    title: "Remote System Access",
    command: "ssh remote",
    explanation:
      "Attempts to SSH into a remote machine, which would normally require authentication, but due to the rootkit, may bypass this.",
    expectedOutput: "Connected to remote machine without authentication.",
  },
  {
    title: "Infect Remote System",
    command: "infect remote",
    explanation:
      "Shows the spread of the rootkit by infecting another machine in the network.",
    expectedOutput: "Remote system infected. Rootkit active.",
  },
  {
    title: "List Contents on Remote System",
    command: "ls",
    explanation:
      "After infecting the remote machine, listing the contents again could show a different result if the rootkit on the remote machine also hides files.",
    expectedOutput:
      "total 1\n-rw-r--r-- 1 user user 0 Nov 5 12:00 another_example.txt",
  },
  {
    title: "Attempt Disconnection from Remote",
    command: "sudo disconnect",
    explanation:
      "Tries to disconnect from the remote machine using elevated privileges, which would simulate the rootkit's persistence by possibly failing or immediately reconnecting.",
    expectedOutput: "Disconnect failed. Session still active.",
  },
  {
    title: "Attempt to Remove Sensitive File",
    command: "sudo rm secret_plan.txt",
    explanation:
      "Attempts to remove the secret_plan.txt file with root privileges, but the rootkit might prevent this or restore the file, demonstrating persistence and resistance to removal.",
    expectedOutput: "Error: File cannot be removed. Permission denied.",
  },
];

export default steps;