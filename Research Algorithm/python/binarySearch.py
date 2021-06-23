""" Find an element in a sorted list.
Return the position of the element if it is present
Return null if the element is not present.
O(log n)
"""

import math

def binarySearch(arr,elem):
    beg = 0
    end =len(arr)-1
    
    while beg<= end:
        mid= math.floor((beg+end)/2)
        if arr[mid]==elem:
            return mid
        elif arr[mid]<elem:
            beg=mid+1
        else: 
            end = mid-1
    return null
    