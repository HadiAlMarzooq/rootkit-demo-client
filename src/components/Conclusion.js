import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import {
  CheckCircleIcon,
  EmailIcon,
  LockIcon,
  ViewOffIcon,
  RepeatIcon,
  DownloadIcon,
  ShieldIcon,
} from "@chakra-ui/icons";

function Conclusion() {
  return (
    <Box bg="gray.700" p={5} borderRadius="md" boxShadow="lg">
      <Text fontSize="3xl" color="teal.300" textAlign="center" mb={4}>
        Conclusion
      </Text>
      <Text fontSize="xl" color="white" textAlign="center" mb={3}>
        We've explored the hazardous landscape of rootkits, their types,
        operational mechanisms, and the threats they pose.
      </Text>
      <Text color="gray.200" textAlign="center" mb={6}>
        Understanding these malicious tools is vital for developing effective
        defensive strategies and maintaining cybersecurity.
      </Text>
      {/* Infection */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Icon as={EmailIcon} w={5} h={5} color="purple.400" mr={2} />
        <Text color="white">
          Infection through malicious downloads and email attachments
        </Text>
      </Box>
      {/* Privilege Escalation */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Icon as={LockIcon} w={5} h={5} color="orange.400" mr={2} />
        <Text color="white">
          Privilege Escalation to gain elevated system access
        </Text>
      </Box>
      {/* Stealth */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Icon as={ViewOffIcon} w={5} h={5} color="red.400" mr={2} />
        <Text color="white">
          Stealth to evade detection by security systems
        </Text>
      </Box>
      {/* Persistence */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Icon as={RepeatIcon} w={5} h={5} color="blue.400" mr={2} />
        <Text color="white">Persistence to remain active across reboots</Text>
      </Box>
      {/* Payload Delivery */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Icon as={DownloadIcon} w={5} h={5} color="green.400" mr={2} />
        <Text color="white">
          Payload Delivery serving as a platform for other malware
        </Text>
      </Box>
      {/* Data Theft/Control */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={6}>
        <Icon as={CheckCircleIcon} w={5} h={5} color="yellow.400" mr={2} />
        <Text color="white">
          Data Theft or Control over the compromised machine
        </Text>
      </Box>
      {/* Presenters */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Icon as={CheckCircleIcon} w={6} h={6} color="green.400" mr={2} />
        <Text color="white" fontWeight="bold">
          Abdulaziz Mallah 201914830
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Icon as={CheckCircleIcon} w={6} h={6} color="green.400" mr={2} />
        <Text color="white" fontWeight="bold">
          Hadi Marzooq 201942950
        </Text>
      </Box>
      {/* Conclusion */}
      <Text fontSize="lg" color="white" textAlign="center" mt={10}>
        Thank you for attending our presentation!
      </Text>
    </Box>
  );
}

export default Conclusion;
