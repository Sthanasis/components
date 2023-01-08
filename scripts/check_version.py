import sys
import json
index = 0
arr=[]
for i in range(1, len(sys.argv)):
    if i > 0:
        print(sys.argv[i])
        if sys.argv[i] == 'message:':
            index = i
            print(index)
        if index > 0 and i == index + 1:
            arr.append(sys.argv[i])
# print(arr)
