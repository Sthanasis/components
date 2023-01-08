import sys
import json
index = 0
arr=[]
messages = []
for i in range(1, len(sys.argv)):
    if i > 0:
        arr.append(sys.argv[i])
for i in range(len(arr)):
    if arr[i] == 'message:':
        index = i + 1
    if i == index: 
        messages.append(arr[i])
print(messages)