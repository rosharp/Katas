export class G964 {

    public static nbYear = (p0, percent, aug, p): number => {

		// while (p0 < p) {
		// 	p0 = p0 + (p0 * (percent/100)) + aug; 
		// 	years++;
		// }

		for (var y = 0; p0 < p; y++) {
			p0 = p0 * (1 + percent / 100) + aug;
		}

		return y;
    }
}
