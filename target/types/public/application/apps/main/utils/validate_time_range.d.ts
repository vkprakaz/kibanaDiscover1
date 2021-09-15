import { ToastsStart } from 'kibana/public';
/**
 * Validates a given time filter range, provided by URL or UI
 * Unless valid, it returns false and displays a notification
 */
export declare function validateTimeRange({ from, to }: {
    from: string;
    to: string;
}, toastNotifications: ToastsStart): boolean;
//# sourceMappingURL=validate_time_range.d.ts.map