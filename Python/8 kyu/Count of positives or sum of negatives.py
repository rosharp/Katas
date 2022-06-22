def count_positives_sum_negatives(arr):
    if not arr: return []
    positive = 0
    negative = 0
    for i in arr:
        if i > 0:
            positive += 1
        if i < 0:
            negative += i
    return [positive, negative]

print(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
