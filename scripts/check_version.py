import sys
import json

for i in range(1, len(sys.argv)):
    if i > 0:
        arr = json.loads(sys.argv[i])
        for m in arr:
            print(m.message)
            