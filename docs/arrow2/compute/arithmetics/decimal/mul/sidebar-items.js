initSidebarItems({"fn":[["adaptive_mul","Adaptive multiplication of two decimal primitive arrays with different precision and scale. If the precision and scale is different, then the smallest scale and precision is adjusted to the largest precision and scale. If during the multiplication one of the results is larger than the max possible value, the result precision is changed to the precision of the max value"],["checked_mul","Checked multiplication of two decimal primitive arrays with the same precision and scale. If the precision and scale is different, then an InvalidArgumentError is returned. If the result from the mul is larger than the possible number with the selected precision (overflowing), then the validity for that index is changed to None"],["mul","Multiply two decimal primitive arrays with the same precision and scale. If the precision and scale is different, then an InvalidArgumentError is returned. This function panics if the multiplied numbers result in a number larger than the possible number for the selected precision."],["saturating_mul","Saturated multiplication of two decimal primitive arrays with the same precision and scale. If the precision and scale is different, then an InvalidArgumentError is returned. If the result from the multiplication is larger than the possible number with the selected precision then the resulted number in the arrow array is the maximum number for the selected precision."]]});