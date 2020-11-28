from enum import IntEnum
class RequestQuoteStatus(IntEnum):
    DRAFT = 0
    SUBMITTED = 1    
    REVIEWED = 2
    ACCEPTED = 3    
    DECLINED = 4