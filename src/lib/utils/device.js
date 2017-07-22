export function isDesktop(ua) {
    return !(/mobile/i.test(ua));
}

export function isMobile(ua) {
    return (/mobile/i.test(ua));
}

export function getCurrentDevice(ua) {
    return (/moblie/i.test(ua) ? 'mobile' : 'desktop');
}