import sys
import json
arr = []
for i in range(1, len(sys.argv)):
    if i > 0:
        arr.append(sys.argv[i])

print(arr)
