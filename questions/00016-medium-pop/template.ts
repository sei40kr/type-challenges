type Pop<T extends any[]> = T extends [...infer S, any] ? S : [];
