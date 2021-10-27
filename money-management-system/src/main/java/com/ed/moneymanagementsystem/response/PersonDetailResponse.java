package com.ed.moneymanagementsystem.response;

import com.ed.moneymanagementsystem.constant.IncomeStatus;

public interface PersonDetailResponse {
    Long getId();

    String getName();

    String getSurname();

    String getJob();

    Double getMoney();
}
