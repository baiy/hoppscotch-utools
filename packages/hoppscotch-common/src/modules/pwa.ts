import { HoppModule } from "."
import { ref, onMounted } from "vue"

export type HoppPWARegistrationStatus =
  | { status: "NOT_INSTALLED" }
  | { status: "INSTALLED"; registration: ServiceWorkerRegistration | undefined }
  | { status: "INSTALL_FAILED"; error: any }

export const pwaNeedsRefresh = ref(false)
export const pwaReadyForOffline = ref(false)
export const pwaDefferedPrompt = ref<Event | null>(null)
export const pwaRegistered = ref<HoppPWARegistrationStatus>({
  status: "NOT_INSTALLED",
})

export const refreshAppForPWAUpdate = async () => {
  return
}

export const installPWA = async () => {
  return
}

export default <HoppModule>{
  onVueAppInit() {
    return
  },
  onRootSetup() {
    onMounted(() => {
      return
    })
  },
}
