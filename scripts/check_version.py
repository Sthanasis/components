import sys
import json
index = 0
arr=[]
for i in range(1, len(sys.argv)):
    if i > 0:
        continue
    if sys.argv[i] == 'message:':
        index = i
    if i == index + 1:
        arr.append(sys.argv[i])
print(arr)
