my_array =[64,34,25,12,22,11,90,5]
# solution 1
for i in range(len(my_array)):
    for j in range(len(my_array)-i-1):
        if my_array[j]>my_array[j+1]:
            my_array[j],my_array[j+1]=my_array[j+1],my_array[j]

print(my_array)

# solution 2
n = len(my_array)
for i in range(n-1):
    for j in range(n-i-1):
        if my_array[j]>my_array[j+1]:
            my_array[j],my_array[j+1]=my_array[j+1],my_array[j]
            
print("sorted array:",my_array)