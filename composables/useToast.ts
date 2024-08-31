
type Toaster = ReturnType<typeof useToast>;

class ToastService {

    _toast!: Toaster;

    constructor(toast: Toaster) {
        this._toast = toast;
    }

    info(message: string) {
        this._toast.add({
            color: "orange",
            title: "Info",
            description: message,
            timeout: 5000,
            icon: "i-heroicons-information-circle"
        });
    }

    success(message: string) {
        this._toast.add({
            color: "emerald",
            title: "Success",
            description: message,
            timeout: 5000,
            icon: "i-heroicons-check-circle"
        });
    }

    failure(message: string) {
        this._toast.add({
            color: "red",
            title: "Failure",
            description: message,
            timeout: 5000,
            icon: "i-heroicons-cross-circle"
        });
    }
}

export const toast = () => {
    return new ToastService(useToast());
}