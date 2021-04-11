from enum import IntEnum
class RequestQuoteStatus(IntEnum):
    DRAFT = 0
    SUBMITTED = 1    
    ACCEPTED = 2    
    DECLINED = 3