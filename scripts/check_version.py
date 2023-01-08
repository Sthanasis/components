import sys
import json

for i in range(1, len(sys.argv)):
    if i > 0:
        arr = sys.argv[i]
        for e in arr:
            event = json.dumb(e)
            print(event.message)
            