export function bouncingBall(h: number, bounce: number, window: number): number {
    if (h > 0 && (bounce > 0 && bounce < 1) && window < h) {
        return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
    } else {
        return -1;
    }
}
