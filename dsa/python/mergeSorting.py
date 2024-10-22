import math
def mergeSorting(arr):
    if(len(arr)<=1):
        return arr
    middleVal= math.floor(len(arr)/2)
    leftArr = arr[0:middleVal]
    rightArr = arr[middleVal:]
    print(leftArr,rightArr,middleVal)
    # leftMerge = mergeSorting(leftArr)
    # mergeSorting(rightArr)
    return merge(mergeSorting(leftArr),mergeSorting(rightArr))

def merge(left,right):
    result =[]
    while(len(left) and len(right)):
        if(left[0]<right[0]):
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
    return result+left+right



print(mergeSorting([3, 6, 8, 10, 1, 2, 1]))