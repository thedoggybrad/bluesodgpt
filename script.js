document.addEventListener("DOMContentLoaded", function() {
  const userInput = document.getElementById("user-input");
  const chatArea = document.getElementById("chat");
  const sendBtn = document.querySelector(".fa-paper-plane");
  const form = document.getElementById('form');
  const infoBtn = document.getElementById('infoBtn');

 function handleSubmit(event) {
  event.preventDefault(); // Prevent refresh on form submission

  // If a user submits input, create a new bubble-container and bubble to show the user input in the chat
  if (userInput.value !== "") {
    let userString = userInput.value;

    let newBubbleContainer = document.createElement("div");
    newBubbleContainer.classList.add("chat-bubble-container", "user-bubble-container");
    newBubbleContainer.innerHTML = '<div class="profile-picture"><img src="images/user.png" height="100%" /></div>';

    let newBubble = document.createElement("div");
    newBubble.classList.add("chat-bubble", "user-bubble");
    newBubble.innerHTML = userInput.value;
    newBubbleContainer.appendChild(newBubble);
    chatArea.appendChild(newBubbleContainer);
    userInput.value = ""; // Clear the input field

    // Define possible responses
    const responses = [
           "APC_INDEX_MISMATCH",
           "DEVICE_QUEUE_NOT_BUSY",
           "INVALID_AFFINITY_SET",
           "INVALID_DATA_ACCESS_TRAP",
           "INVALID_PROCESS_ATTACH_ATTEMPT",
           "INVALID_PROCESS_DETACH_ATTEMPT",
           "INVALID_SOFTWARE_INTERRUPT",
           "IRQL_NOT_DISPATCH_LEVEL",
           "IRQL_NOT_GREATER_OR_EQUAL",
           "IRQL_NOT_LESS_OR_EQUAL",
           "NO_EXCEPTION_HANDLING_SUPPORT",
           "MAXIMUM_WAIT_OBJECTS_EXCEEDED",
           "MUTEX_LEVEL_NUMBER_VIOLATION",
           "NO_USER_MODE_CONTEXT",
           "SPIN_LOCK_ALREADY_OWNED",
           "SPIN_LOCK_NOT_OWNED",
           "THREAD_NOT_MUTEX_OWNER",
           "TRAP_CAUSE_UNKNOWN",
           "EMPTY_THREAD_REAPER_LIST",
           "CREATE_DELETE_LOCK_NOT_LOCKED",
           "LAST_CHANCE_CALLED_FROM_KMODE",
           "CID_HANDLE_CREATION",
           "CID_HANDLE_DELETION",
           "REFERENCE_BY_POINTER",
           "BAD_POOL_HEADER",
           "MEMORY_MANAGEMENT",
           "PFN_SHARE_COUNT",
           "PFN_REFERENCE_COUNT",
           "NO_SPIN_LOCK_AVAILABLE",
           "KMODE_EXCEPTION_NOT_HANDLED",
           "SHARED_RESOURCE_CONV_ERROR",
           "KERNEL_APC_PENDING_DURING_EXIT",
           "QUOTA_UNDERFLOW",
           "FILE_SYSTEM",
           "FAT_FILE_SYSTEM",
           "NTFS_FILE_SYSTEM",
           "NPFS_FILE_SYSTEM",
           "CDFS_FILE_SYSTEM",
           "RDR_FILE_SYSTEM",
           "CORRUPT_ACCESS_TOKEN",
           "SECURITY_SYSTEM",
           "INCONSISTENT_IRP",
           "PANIC_STACK_SWITCH",
           "PORT_DRIVER_INTERNAL",
           "SCSI_DISK_DRIVER_INTERNAL",
           "DATA_BUS_ERROR",
           "INSTRUCTION_BUS_ERROR",
           "SET_OF_INVALID_CONTEXT",
           "PHASE0_INITIALIZATION_FAILED",
           "PHASE1_INITIALIZATION_FAILED",
           "UNEXPECTED_INITIALIZATION_CALL",
           "CACHE_MANAGER",
           "NO_MORE_IRP_STACK_LOCATIONS",
           "DEVICE_REFERENCE_COUNT_NOT_ZERO",
           "FLOPPY_INTERNAL_ERROR",
           "SERIAL_DRIVER_INTERNAL",
           "SYSTEM_EXIT_OWNED_MUTEX",
           "SYSTEM_UNWIND_PREVIOUS_USER",
           "SYSTEM_SERVICE_EXCEPTION",
           "INTERRUPT_UNWIND_ATTEMPTED",
           "INTERRUPT_EXCEPTION_NOT_HANDLED",
           "MULTIPROCESSOR_CONFIGURATION_NOT_SUPPORTED",
           "NO_MORE_SYSTEM_PTES",
           "TARGET_MDL_TOO_SMALL",
           "MUST_SUCCEED_POOL_EMPTY",
           "ATDISK_DRIVER_INTERNAL",
           "NO_SUCH_PARTITION",
           "MULTIPLE_IRP_COMPLETE_REQUESTS",
           "INSUFFICIENT_SYSTEM_MAP_REGS",
           "DEREF_UNKNOWN_LOGON_SESSION",
           "REF_UNKNOWN_LOGON_SESSION",
           "CANCEL_STATE_IN_COMPLETED_IRP",
           "PAGE_FAULT_WITH_INTERRUPTS_OFF",
           "IRQL_GT_ZERO_AT_SYSTEM_SERVICE",
           "STREAMS_INTERNAL_ERROR",
           "FATAL_UNHANDLED_HARD_ERROR",
           "NO_PAGES_AVAILABLE",
           "PFN_LIST_CORRUPT",
           "NDIS_INTERNAL_ERROR",
           "PAGE_FAULT_IN_NONPAGED_AREA",
           "REGISTRY_ERROR",
           "MAILSLOT_FILE_SYSTEM",
           "NO_BOOT_DEVICE",
           "LM_SERVER_INTERNAL_ERROR",
           "DATA_COHERENCY_EXCEPTION",
           "INSTRUCTION_COHERENCY_EXCEPTION",
           "XNS_INTERNAL_ERROR",
           "FTDISK_INTERNAL_ERROR",
           "PINBALL_FILE_SYSTEM",
           "CRITICAL_SERVICE_FAILED",
           "SET_ENV_VAR_FAILED",
           "HAL_INITIALIZATION_FAILED",
           "UNSUPPORTED_PROCESSOR",
           "OBJECT_INITIALIZATION_FAILED",
           "SECURITY_INITIALIZATION_FAILED",
           "PROCESS_INITIALIZATION_FAILED",
           "HAL1_INITIALIZATION_FAILED",
           "OBJECT1_INITIALIZATION_FAILED",
           "SECURITY1_INITIALIZATION_FAILED",
           "SYMBOLIC_INITIALIZATION_FAILED",
           "MEMORY1_INITIALIZATION_FAILED",
           "CACHE_INITIALIZATION_FAILED",
           "CONFIG_INITIALIZATION_FAILED",
           "FILE_INITIALIZATION_FAILED",
           "IO1_INITIALIZATION_FAILED",
           "LPC_INITIALIZATION_FAILED",
           "PROCESS1_INITIALIZATION_FAILED",
           "REFMON_INITIALIZATION_FAILED",
           "SESSION1_INITIALIZATION_FAILED",
           "SESSION2_INITIALIZATION_FAILED",
           "SESSION3_INITIALIZATION_FAILED",
           "SESSION4_INITIALIZATION_FAILED",
           "SESSION5_INITIALIZATION_FAILED",
           "ASSIGN_DRIVE_LETTERS_FAILED",
           "CONFIG_LIST_FAILED",
           "BAD_SYSTEM_CONFIG_INFO",
           "CANNOT_WRITE_CONFIGURATION",
           "PROCESS_HAS_LOCKED_PAGES",
           "KERNEL_STACK_INPAGE_ERROR",
           "PHASE0_EXCEPTION",
           "MISMATCHED_HAL",
           "KERNEL_DATA_INPAGE_ERROR",
           "INACCESSIBLE_BOOT_DEVICE",
           "BUGCODE_NDIS_DRIVER",
           "INSTALL_MORE_MEMORY",
           "SYSTEM_THREAD_EXCEPTION_NOT_HANDLED",
           "UNEXPECTED_KERNEL_MODE_TRAP",
           "NMI_HARDWARE_FAILURE",
           "SPIN_LOCK_INIT_FAILURE",
           "DFS_FILE_SYSTEM",
           "SETUP_FAILURE",
           "MBR_CHECKSUM_MISMATCH",
           "KERNEL_MODE_EXCEPTION_NOT_HANDLED",
           "PP0_INITIALIZATION_FAILED",
           "PP1_INITIALIZATION_FAILED",
           "UP_DRIVER_ON_MP_SYSTEM",
           "INVALID_KERNEL_HANDLE",
           "KERNEL_STACK_LOCKED_AT_EXIT",
           "INVALID_WORK_QUEUE_ITEM",
           "BOUND_IMAGE_UNSUPPORTED",
           "END_OF_NT_EVALUATION_PERIOD",
           "INVALID_REGION_OR_SEGMENT",
           "SYSTEM_LICENSE_VIOLATION",
           "UDFS_FILE_SYSTEM",
           "MACHINE_CHECK_EXCEPTION",
           "USER_MODE_HEALTH_MONITOR",
           "DRIVER_POWER_STATE_FAILURE",
           "INTERNAL_POWER_ERROR",
           "PCI_BUS_DRIVER_INTERNAL",
           "MEMORY_IMAGE_CORRUPT",
           "ACPI_DRIVER_INTERNAL",
           "CNSS_FILE_SYSTEM_FILTER",
           "ACPI_BIOS_ERROR",
           "BAD_EXHANDLE",
           "HAL_MEMORY_ALLOCATION",
           "VIDEO_DRIVER_DEBUG_REPORT_REQUEST",
           "BGI_DETECTED_VIOLATION",
           "VIDEO_DRIVER_INIT_FAILURE",
           "ATTEMPTED_SWITCH_FROM_DPC",
           "CHIPSET_DETECTED_ERROR",
           "SESSION_HAS_VALID_VIEWS_ON_EXIT",
           "NETWORK_BOOT_INITIALIZATION_FAILED",
           "NETWORK_BOOT_DUPLICATE_ADDRESS",
           "INVALID_HIBERNATED_STATE",
           "ATTEMPTED_WRITE_TO_READONLY_MEMORY",
           "MUTEX_ALREADY_OWNED",
           "SPECIAL_POOL_DETECTED_MEMORY_CORRUPTION",
           "BAD_POOL_CALLER",
           "DRIVER_VERIFIER_DETECTED_VIOLATION",
           "DRIVER_CORRUPTED_EXPOOL",
           "DRIVER_CAUGHT_MODIFYING_FREED_POOL",
           "TIMER_OR_DPC_INVALID",
           "IRQL_UNEXPECTED_VALUE",
           "DRIVER_VERIFIER_IOMANAGER_VIOLATION",
           "PNP_DETECTED_FATAL_ERROR",
           "DRIVER_LEFT_LOCKED_PAGES_IN_PROCESS",
           "PAGE_FAULT_IN_FREED_SPECIAL_POOL",
           "PAGE_FAULT_BEYOND_END_OF_ALLOCATION",
           "DRIVER_UNLOADED_WITHOUT_CANCELLING_PENDING_OPERATIONS",
           "TERMINAL_SERVER_DRIVER_MADE_INCORRECT_MEMORY_REFERENCE",
           "DRIVER_CORRUPTED_MMPOOL",
           "DRIVER_IRQL_NOT_LESS_OR_EQUAL",
           "BUGCODE_ID_DRIVER",
           "DRIVER_PORTION_MUST_BE_NONPAGED",
           "SYSTEM_SCAN_AT_RAISED_IRQL_CAUGHT_IMPROPER_DRIVER_UNLOAD",
           "DRIVER_PAGE_FAULT_IN_FREED_SPECIAL_POOL",
           "DRIVER_PAGE_FAULT_BEYOND_END_OF_ALLOCATION",
           "DRIVER_UNMAPPING_INVALID_VIEW",
           "DRIVER_USED_EXCESSIVE_PTES",
           "LOCKED_PAGES_TRACKER_CORRUPTION",
           "SYSTEM_PTE_MISUSE",
           "DRIVER_CORRUPTED_SYSPTES",
           "DRIVER_INVALID_STACK_ACCESS",
           "POOL_CORRUPTION_IN_FILE_AREA",
           "IMPERSONATING_WORKER_THREAD",
           "ACPI_BIOS_FATAL_ERROR",
           "WORKER_THREAD_RETURNED_AT_BAD_IRQL",
           "MANUALLY_INITIATED_CRASH",
           "RESOURCE_NOT_OWNED",
           "WORKER_INVALID",
           "DRIVER_VERIFIER_DMA_VIOLATION",
           "INVALID_FLOATING_POINT_STATE",
           "INVALID_CANCEL_OF_FILE_OPEN",
           "ACTIVE_EX_WORKER_THREAD_TERMINATION",
           "THREAD_STUCK_IN_DEVICE_DRIVER",
           "DIRTY_MAPPED_PAGES_CONGESTION",
           "SESSION_HAS_VALID_SPECIAL_POOL_ON_EXIT",
           "UNMOUNTABLE_BOOT_VOLUME",
           "CRITICAL_PROCESS_DIED",
           "STORAGE_MINIPORT_ERROR",
           "SCSI_VERIFIER_DETECTED_VIOLATION",
           "HARDWARE_INTERRUPT_STORM",
           "DISORDERLY_SHUTDOWN",
           "CRITICAL_OBJECT_TERMINATION",
           "FLTMGR_FILE_SYSTEM",
           "PCI_VERIFIER_DETECTED_VIOLATION",
           "DRIVER_OVERRAN_STACK_BUFFER",
           "RAMDISK_BOOT_INITIALIZATION_FAILED",
           "DRIVER_RETURNED_STATUS_REPARSE_FOR_VOLUME_OPEN",
           "HTTP_DRIVER_CORRUPTED",
           "ATTEMPTED_EXECUTE_OF_NOEXECUTE_MEMORY",
           "DIRTY_NOWRITE_PAGES_CONGESTION",
           "BUGCODE_USB_DRIVER",
           "RESERVE_QUEUE_OVERFLOW",
           "LOADER_BLOCK_MISMATCH",
           "CLOCK_WATCHDOG_TIMEOUT",
           "DPC_WATCHDOG_TIMEOUT",
           "MUP_FILE_SYSTEM",
           "AGP_INVALID_ACCESS",
           "AGP_GART_CORRUPTION",
           "AGP_ILLEGALLY_REPROGRAMMED",
           "THIRD_PARTY_FILE_SYSTEM_FAILURE",
           "CRITICAL_STRUCTURE_CORRUPTION",
           "APP_TAGGING_INITIALIZATION_FAILED",
           "FSRTL_EXTRA_CREATE_PARAMETER_VIOLATION",
           "WDF_VIOLATION",
           "VIDEO_MEMORY_MANAGEMENT_INTERNAL",
           "RESOURCE_MANAGER_EXCEPTION_NOT_HANDLED",
           "RECURSIVE_NMI",
           "MSRPC_STATE_VIOLATION",
           "VIDEO_DXGKRNL_FATAL_ERROR",
           "VIDEO_SHADOW_DRIVER_FATAL_ERROR",
           "AGP_INTERNAL",
           "VIDEO_TDR_FAILURE",
           "VIDEO_TDR_TIMEOUT_DETECTED",
           "VIDEO_SCHEDULER_INTERNAL_ERROR",
           "EM_INITIALIZATION_FAILURE",
           "DRIVER_RETURNED_HOLDING_CANCEL_LOCK",
           "ATTEMPTED_WRITE_TO_CM_PROTECTED_STORAGE",
           "EVENT_TRACING_FATAL_ERROR",
           "TOO_MANY_RECURSIVE_FAULTS",
           "INVALID_DRIVER_HANDLE",
           "BITLOCKER_FATAL_ERROR",
           "DRIVER_VIOLATION",
           "WHEA_INTERNAL_ERROR",
           "CRYPTO_SELF_TEST_FAILURE",
           "WHEA_UNCORRECTABLE_ERROR",
           "NMR_INVALID_STATE",
           "NETIO_INVALID_POOL_CALLER",
           "PAGE_NOT_ZERO",
           "WORKER_THREAD_RETURNED_WITH_BAD_IO_PRIORITY",
           "WORKER_THREAD_RETURNED_WITH_BAD_PAGING_IO_PRIORITY",
           "MUI_NO_VALID_SYSTEM_LANGUAGE",
           "FAULTY_HARDWARE_CORRUPTED_PAGE",
           "EXFAT_FILE_SYSTEM",
           "VOLSNAP_OVERLAPPED_TABLE_ACCESS",
           "INVALID_MDL_RANGE",
           "VHD_BOOT_INITIALIZATION_FAILED",
           "DYNAMIC_ADD_PROCESSOR_MISMATCH",
           "INVALID_EXTENDED_PROCESSOR_STATE",
           "RESOURCE_OWNER_POINTER_INVALID",
           "DPC_WATCHDOG_VIOLATION",
           "DRIVE_EXTENDER",
           "REGISTRY_FILTER_DRIVER_EXCEPTION",
           "VHD_BOOT_HOST_VOLUME_NOT_ENOUGH_SPACE",
           "WIN32K_HANDLE_MANAGER",
           "GPIO_CONTROLLER_DRIVER_ERROR",
           "KERNEL_SECURITY_CHECK_FAILURE",
           "KERNEL_MODE_HEAP_CORRUPTION",
           "PASSIVE_INTERRUPT_ERROR",
           "INVALID_IO_BOOST_STATE",
           "CRITICAL_INITIALIZATION_FAILURE",
           "STORAGE_DEVICE_ABNORMALITY_DETECTED",
           "PROCESSOR_DRIVER_INTERNAL",
           "BUGCODE_USB3_DRIVER",
           "SECURE_BOOT_VIOLATION",
           "ABNORMAL_RESET_DETECTED",
           "REFS_FILE_SYSTEM",
           "KERNEL_WMI_INTERNAL",
           "SOC_SUBSYSTEM_FAILURE",
           "FATAL_ABNORMAL_RESET_ERROR",
           "EXCEPTION_SCOPE_INVALID",
           "SOC_CRITICAL_DEVICE_REMOVED",
           "PDC_WATCHDOG_TIMEOUT",
           "TCPIP_AOAC_NIC_ACTIVE_REFERENCE_LEAK",
           "UNSUPPORTED_INSTRUCTION_MODE",
           "INVALID_PUSH_LOCK_FLAGS",
           "KERNEL_LOCK_ENTRY_LEAKED_ON_THREAD_TERMINATION",
           "UNEXPECTED_STORE_EXCEPTION",
           "OS_DATA_TAMPERING",
           "KERNEL_THREAD_PRIORITY_FLOOR_VIOLATION",
           "ILLEGAL_IOMMU_PAGE_FAULT",
           "HAL_ILLEGAL_IOMMU_PAGE_FAULT",
           "SDBUS_INTERNAL_ERROR",
           "WORKER_THREAD_RETURNED_WITH_SYSTEM_PAGE_PRIORITY_ACTIVE",
           "WIN32K_ATOMIC_CHECK_FAILURE",
           "KERNEL_AUTO_BOOST_INVALID_LOCK_RELEASE",
           "WORKER_THREAD_TEST_CONDITION",
           "WIN32K_CRITICAL_FAILURE",
           "INVALID_RUNDOWN_PROTECTION_FLAGS",
           "INVALID_SLOT_ALLOCATOR_FLAGS",
           "ERESOURCE_INVALID_RELEASE",
           "CLUSTER_CSV_CLUSSVC_DISCONNECT_WATCHDOG",
           "CRYPTO_LIBRARY_INTERNAL_ERROR",
           "COREMSGCALL_INTERNAL_ERROR",
           "COREMSG_INTERNAL_ERROR",
           "ELAM_DRIVER_DETECTED_FATAL_ERROR",
           "PROFILER_CONFIGURATION_ILLEGAL",
           "MICROCODE_REVISION_MISMATCH",
           "VIDEO_DWMINIT_TIMEOUT_FALLBACK_BDD",
           "BAD_OBJECT_HEADER",
           "SECURE_KERNEL_ERROR",
           "HYPERGUARD_VIOLATION",
           "SECURE_FAULT_UNHANDLED",
           "KERNEL_PARTITION_REFERENCE_VIOLATION",
           "PF_DETECTED_CORRUPTION",
           "KERNEL_AUTO_BOOST_LOCK_ACQUISITION_WITH_RAISED_IRQL",
           "LOADER_ROLLBACK_DETECTED",
           "WIN32K_SECURITY_FAILURE",
           "KERNEL_STORAGE_SLOT_IN_USE",
           "WORKER_THREAD_RETURNED_WHILE_ATTACHED_TO_SILO",
           "TTM_FATAL_ERROR",
           "WIN32K_POWER_WATCHDOG_TIMEOUT",
           "TTM_WATCHDOG_TIMEOUT",
           "WIN32K_CALLOUT_WATCHDOG_BUGCHECK",
           "EXCEPTION_ON_INVALID_STACK",
           "UNWIND_ON_INVALID_STACK",
           "FAST_ERESOURCE_PRECONDITION_VIOLATION",
           "STORE_DATA_STRUCTURE_CORRUPTION",
           "MANUALLY_INITIATED_POWER_BUTTON_HOLD",
           "SYNTHETIC_WATCHDOG_TIMEOUT",
           "INVALID_SILO_DETACH",
           "INVALID_CALLBACK_STACK_ADDRESS",
           "INVALID_KERNEL_STACK_ADDRESS",
           "HARDWARE_WATCHDOG_TIMEOUT",
           "CPI_FIRMWARE_WATCHDOG_TIMEOUT",
           "WORKER_THREAD_INVALID_STATE",
           "WFP_INVALID_OPERATION",
           "DRIVER_PNP_WATCHDOG",
           "WORKER_THREAD_RETURNED_WITH_NON_DEFAULT_WORKLOAD_CLASS",
           "EFS_FATAL_ERROR",
           "UCMUCSI_FAILURE",
           "HAL_IOMMU_INTERNAL_ERROR",
           "HAL_BLOCKED_PROCESSOR_INTERNAL_ERROR",
           "IPI_WATCHDOG_TIMEOUT",
           "DMA_COMMON_BUFFER_VECTOR_ERROR",
           "BUGCODE_MBBADAPTER_DRIVER",
           "BUGCODE_WIFIADAPTER_DRIVER",
           "PROCESSOR_START_TIMEOUT",
           "VIDEO_DXGKRNL_SYSMM_FATAL_ERROR",
           "ILLEGAL_ATS_INITIALIZATION",
           "SECURE_PCI_CONFIG_SPACE_ACCESS_VIOLATION",
           "DAM_WATCHDOG_TIMEOUT",
           "HANDLE_ERROR_ON_CRITICAL_THREAD",
           "XBOX_ERACTRL_CS_TIMEOUT",
           "BC_BLUETOOTH_VERIFIER_FAULT",
           "BC_BTHMINI_VERIFIER_FAULT",
           "HYPERVISOR_ERROR",
           "SYSTEM_THREAD_EXCEPTION_NOT_HANDLED_M",
           "UNEXPECTED_KERNEL_MODE_TRAP_M",
           "KERNEL_MODE_EXCEPTION_NOT_HANDLED_M",
           "THREAD_STUCK_IN_DEVICE_DRIVER_M",
           "THREAD_TERMINATE_HELD_MUTEX",
           "STATUS_CANNOT_LOAD_REGISTRY_FILE",
           "WINLOGON_FATAL_ERROR",
           "STATUS_IMAGE_CHECKSUM_MISMATCH",
           "MANUALLY_INITIATED_CRASH1",
           "",
    ];

    // Select a random response
    let randomIndex = Math.floor(Math.random() * responses.length);
    let err = responses[randomIndex];

    // Show the DogGPT response in a new chat-gpt-bubble, wrapped in a chat-bubble-container
    let newBubble2Container = document.createElement("div");
    newBubble2Container.classList.add("chat-bubble-container", "chat-gpt-bubble-container");
    newBubble2Container.innerHTML = '<div class="profile-picture"><img src="images/avatar.png" height="100%" /></div>';

    let newBubble2 = document.createElement("div");
    newBubble2.classList.add("chat-bubble", "chat-gpt-bubble");
    newBubble2.innerHTML = "...."; // At first, only show an ellipsis
    newBubble2Container.appendChild(newBubble2);
    chatArea.appendChild(newBubble2Container);
    form.scrollIntoView(); // Scroll down, so the input field is at the bottom of the page again

    let currenterr = 0;

    let errLoop = setInterval(() => { // Interval to show more of the reply every 100 milliseconds (simulating typing behavior)
      if (currenterr < err.length) {
        currenterr += Math.floor(Math.random() * 10); // Show between 0 and 10 more characters
        newBubble2.innerHTML = err.slice(0, currenterr) + "█"; // While typing, end the string with a block character
      } else {
        newBubble2.innerHTML = err; // When finished, put the entire response in the bubble, without block character
        clearInterval(errLoop);
        userInput.focus(); // Focus the input again, so the user can type a new response
      }
    }, 100);
  }
}


  sendBtn.addEventListener("click", handleSubmit); // Handle clicks to the submit button
  form.addEventListener("submit", handleSubmit); // Handle default submit (e.g., pressing enter)

  const infoText = [
    "Hi! I'm TheDoggyBrad from TheDoggyBrad Software Lab. I made this site just for fun.",
    "To be clear: this site does not actually use ChatGPT or any other form of AI. It just returns some random Windows Blue Screen of Death bug check code. Nothing is done with your input either.",
    'If you want to know more, <a href="https://github.com/thedoggybrad/bluesodgpt/" target="_blank">check out the code on Github</a>.',
    'By the way, this is distributed using The Unlicensed, <a href="https://github.com/thedoggybrad/bluesodgpt/blob/master/license" target="_blank">which can be visited here</a>.',
    'Enjoy using the "BlueSodGPT!"'
  ]; // Lines of the information chat

  infoBtn.addEventListener("click", handleInfoClick); // Handle clicks to the info link

  function handleInfoClick() {
    // Create a chat-bubble-container
    let newBubble3Container = document.createElement("div");
    newBubble3Container.classList.add("chat-bubble-container", "thedoggybrad-bubble-container");
    newBubble3Container.innerHTML = '<div class="profile-picture"><img src="images/thedoggybrad.jpeg" height="100%" /></div>';

    function createLine(i) { // Create each line separately, one at a time
      if (i < infoText.length) { // Check if the line exists
        let newBubble3 = document.createElement("div");
        newBubble3.classList.add("chat-bubble", "thedoggybrad-bubble");
        let currentLineText = infoText[i];
        let currentWord = 0;
        let singleLineLoop = setInterval(() => { // Loop over the words to simulate typing behavior
          if (currentWord < currentLineText.length) {
            currentWord += Math.floor(Math.random() * 10) + 5; // Return between 5 and 15 characters
            newBubble3.innerHTML = currentLineText.slice(0, currentWord) + "█"; // While typing, end the string with a block character
          } else { 
            newBubble3.innerHTML = currentLineText; // When finished, put the entire response in the bubble without the block character
            clearInterval(singleLineLoop);
            form.scrollIntoView();
            userInput.focus(); // Focus the input again, so the user can type a new response
            createLine(i + 1); // Call this function again using i+1 so the next line is created
          }
        }, 80);

        newBubble3Container.appendChild(newBubble3);
        chatArea.appendChild(newBubble3Container);
      }
    }

    createLine(0); // Start creating the response with the first line
  }
});
