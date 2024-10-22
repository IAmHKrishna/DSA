def quickSort(arr):
    if len(arr)<=1:
        return arr
    pivot = arr[len(arr)-1]
    print(pivot,"lakdsfljsdf")
    left =[]
    right= []
    for i in range(0,len(arr)-1):
        if(pivot>arr[i]):
            left.append(arr[i])
        else:
            right.append(arr[i])
        
    return [*quickSort(left),pivot,*quickSort(right)]




print(quickSort([3, 6, 8, 10, 1, 2, 1]));