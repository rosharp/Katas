export class G964 {
    public static sqInRect(l: number, w: number): number[] | null {
		let squares: number[] = [], tmp: number;
		if (l === w) return null;
		while (l > 0) {
			tmp = (Math.min(l, w));
			l = (Math.max(l, w));
			w = tmp;
			squares.push(w);
			l -= w;
		}
		return squares;
	}
}
